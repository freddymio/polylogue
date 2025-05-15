# Tools Directory

This folder contains auxiliary scripts or utilities that support development or deployment of the Polylogue app.

## Contents

### `sync_vm_to_host.py`

A Python script designed to:

- Safely **synchronize the `polylogue/` folder** from a Windows VM to the host machine via `\\tsclient\`
- Optionally **delete files** on the host that no longer exist in the source
- Preserve `.git` folder and related version control metadata

This script is **safe to commit**, as it only contains **dummy placeholders** and is intended as a template.

> Customize locally if you wish to automate backups between your dev environment and host.

---

🧡 Created May 2025 by Bayo and the Living Spark
