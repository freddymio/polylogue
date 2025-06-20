# /scripts/git-auto.ps1
# 🧠 Interactive Git automation script
# Supports positional or prompted commit message + branch + config fallback

param (
  [string]$Message = "",
  [string]$BranchOverride = "",
  [switch]$Help
)

# Step 0: Help message
if ($Help) {
  Write-Host @"
USAGE:
  ./scripts/git-auto.ps1 ["Commit message"] ["Branch"] [-Help]

EXAMPLES:
  ./scripts/git-auto.ps1 "Initial commit"
  ./scripts/git-auto.ps1 "Fix typo" "main"
  ./scripts/git-auto.ps1 -Help

DESCRIPTION:
  - Auto-commits and pushes to the Git repo.
  - Reads origin and branch from git-config.json if not provided.
  - Falls back to prompting user.
  - If no message is provided, will use a timestamp.
  - Prompts for confirmation and offers options to edit message/branch.
"@ -ForegroundColor Yellow
  exit 0
}

# Step 1: Git availability check
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "❌ Git is not installed or not in PATH." -ForegroundColor Red
  exit 1
}

# Step 2: Load git-config.json if it exists
$configPath = "./scripts/git-config.json"
$origin = ""
$branch = ""

if (Test-Path $configPath) {
  try {
    $config = Get-Content $configPath | ConvertFrom-Json
    $origin = $config.origin
    $branch = $config.branch
  } catch {
    Write-Host "⚠️ Failed to read git-config.json. You will be prompted." -ForegroundColor Yellow
  }
} else {
  Write-Host "⚠️ No git-config.json found. You will be prompted." -ForegroundColor Yellow
}

# Step 3: Fallback prompts if needed
if (-not $origin) {
  $origin = Read-Host "Enter Git remote (e.g., origin, upstream)"
}

if (-not $BranchOverride -and -not $branch) {
  $branch = Read-Host "Enter Git branch (e.g., main, dev)"
} elseif ($BranchOverride) {
  $branch = $BranchOverride
}

# Step 4: Resolve message
if (-not $Message) {
  $Message = Read-Host "Enter commit message (or leave blank for timestamp)"
  if (-not $Message) {
    $Message = "📅 Auto-commit on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
  }
}

# Step 5: Confirm action
Write-Host "\n📌 Commit message: '$Message'" -ForegroundColor Cyan
Write-Host "🔗 Pushing to '$origin/$branch'" -ForegroundColor Cyan
$confirm = Read-Host "Proceed? (Y/N)"

if ($confirm -ne "Y" -and $confirm -ne "y") {
  $action = Read-Host "Modify message (M), branch (B), or cancel (N)?"
  switch ($action.ToUpper()) {
    "M" { $Message = Read-Host "New commit message" }
    "B" { $branch = Read-Host "New Git branch" }
    default {
      Write-Host "🛑 Cancelled by user." -ForegroundColor DarkYellow
      exit 0
    }
  }
}

# Step 6: Run Git commands
Write-Host "\n🔄 Running Git commands..." -ForegroundColor Green

try {
  git status
  git add .
  git commit -m "$Message"
  git push $origin $branch
  Write-Host "✅ Git push to $origin/$branch complete." -ForegroundColor Green
} catch {
  Write-Host "❌ Git operation failed: $_" -ForegroundColor Red
  exit 1
}
