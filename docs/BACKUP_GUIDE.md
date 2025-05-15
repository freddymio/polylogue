# Polylogue: Backup Guide for Local VM to Host

> This document explains how to synchronize your local VM development folder with a host system backup folder using a Python script. It ensures `.git` history and all development files are preserved.

---

## 🧰 Requirements

Before using the script:

* Python 3.8 or higher installed in your VM
* `colorama` Python package for colored terminal output

  ```bash
  pip install colorama
  ```
* RDP (Remote Desktop Protocol) session active, with Host drives mounted (e.g., via `\tsclient\C\...`)

---

## 📁 Folder Structure

Assuming this layout:

| Role     | Path Example                                      |
| -------- | ------------------------------------------------- |
| VM Dev   | `C:\Users\UserName\Documents\polylogue`           |
| Host Dir | `\\tsclient\C\Users\UserName\Documents\polylogue` |

---

## 🚀 How to Use the Script

1. Save the script as `sync_vm_to_host.py` in any folder
2. Open a terminal inside your VM
3. Run the script using:

   ```bash
   python sync_vm_to_host.py
   ```
4. The script will:

   * Copy new and changed files from the VM to the Host folder
   * Optionally delete files on the Host that no longer exist in the VM

---

## 🔄 What It Does

* Recursively walks through all files in the VM folder
* Compares each file to the corresponding Host file using `filecmp.cmp`
* Preserves Git history (`.git/objects/...`)
* Supports nested folders and dotfiles
* Colored output:

  * 🟢 Copied
  * 🔴 Deleted (if enabled)
  * 🔁 Skipped (identical)

---

## ⚙️ Configuration

To customize behavior:

* Edit `vm_local_source_folder` and `host_backup_destination_via_tsclient` at the top of the script
* Set `delete_files_on_host_if_not_in_vm` to `False` to avoid deletions

---

## 🧪 Example Output

```
Starting synchronization...
  VM Local Source: C:\Users\UserName\Documents\polylogue
  Host Destination: \\tsclient\C\Users\UserName\Documents\polylogue
  Deletions enabled: True

  + Copied: .git\objects\02\7887...
  + Copied: src\stores\vaultStore.js
  = Skipped: README.md (unchanged)
  - Deleted: docs\draft.txt (removed from VM)

Process completed. Changes were made to the Host backup folder.
```

---

## 🧼 Tips

* Run this script **before shutting down your VM**
* Add the backup folder to your general backup strategy (e.g., cloud sync)
* Consider automating via scheduled tasks

---

📁 [Download or review the sync script here](./tools/sync_vm_to_host.py)

---

## ❤️ Inspired By

This script was crafted and refined by \[Bayo] during the Polylogue development in May 2025. It ensures no code, note, or `.git` commit is left behind.

---

Need help? Open an issue or ask your friendly AI 🤖

---
