import os
import shutil
import filecmp
import datetime
import time
from colorama import Fore, Style, init as colorama_init # <-- IMPORT colorama

# --- Initialize colorama ---
colorama_init(autoreset=True) # <-- INITIALIZE colorama (autoreset=True means colors reset after each print)

# --- Configuration (to be run from INSIDE THE VM) ---
# (Your existing configuration variables remain here)
vm_local_source_folder = r"C:\Users\UserName\Documents\polylogue"
host_backup_destination_via_tsclient = r"\\tsclient\C\Users\UserName\Documents\polylogue"
delete_files_on_host_if_not_in_vm = False # Change this to 'True' to delete files deleted in the main project 

# --- Clear screen ---
os.system('cls' if os.name == 'nt' else 'clear')

# --- Helper Functions ---
def get_relative_folder_contents(folder_path):
    contents = set()
    if not os.path.exists(folder_path):
        # Using Fore.YELLOW for warnings, Fore.RED for errors
        print(f"{Fore.YELLOW}Warning: Path does not exist or is not accessible: {folder_path}{Style.RESET_ALL}")
        return contents
    if not os.path.isdir(folder_path):
        print(f"{Fore.YELLOW}Warning: Path is not a directory: {folder_path}{Style.RESET_ALL}")
        return contents

    for root, dirs, files in os.walk(folder_path):
        for name in files:
            relative_path = os.path.relpath(os.path.join(root, name), folder_path)
            contents.add(relative_path)
        for name in dirs:
            relative_path = os.path.relpath(os.path.join(root, name), folder_path)
            contents.add(relative_path)
    return contents

def synchronize_vm_to_host_via_tsclient(source_local_vm, dest_host_tsclient, enable_deletions=False):
    print(f"\nStarting synchronization...")
    print(f"  VM Local Source: {source_local_vm}")
    print(f"  Host Destination (via \\tsclient): {dest_host_tsclient}")
    print(f"  Deletions on Host enabled: {enable_deletions}")

    if not os.path.exists(source_local_vm) or not os.path.isdir(source_local_vm):
        print(f"{Fore.RED}Error: VM local source path '{source_local_vm}' does not exist or is not a directory.{Style.RESET_ALL}")
        return False

    if not os.path.exists(dest_host_tsclient):
        try:
            print(f"Host destination path '{dest_host_tsclient}' does not exist. Attempting to create it.")
            os.makedirs(dest_host_tsclient)
            print(f"Successfully created Host destination path: {dest_host_tsclient}")
        except OSError as e:
            print(f"{Fore.RED}Error: Could not create Host destination path '{dest_host_tsclient}': {e}{Style.RESET_ALL}")
            print(f"{Fore.YELLOW}Please ensure the parent directory exists on the host and is accessible via \\tsclient.{Style.RESET_ALL}")
            return False
    elif not os.path.isdir(dest_host_tsclient):
        print(f"{Fore.RED}Error: Host destination path '{dest_host_tsclient}' exists but is not a directory.{Style.RESET_ALL}")
        return False

    vm_source_contents = get_relative_folder_contents(source_local_vm)
    host_dest_contents = get_relative_folder_contents(dest_host_tsclient)
    changes_made = False

    # --- Phase 1: Copy ---
    items_to_copy = vm_source_contents - host_dest_contents
    if items_to_copy:
        print(f"\nFound {len(items_to_copy)} new item(s) in VM source to copy to Host backup folder:")
        sorted_items_to_copy = sorted(list(items_to_copy))
        for item_rel_path in sorted_items_to_copy:
            full_src_item_path = os.path.join(source_local_vm, item_rel_path)
            full_dest_item_path = os.path.join(dest_host_tsclient, item_rel_path)
            print(f"  - Processing for copy: {item_rel_path}")
            dest_item_parent_dir = os.path.dirname(full_dest_item_path)
            if not os.path.exists(dest_item_parent_dir):
                try:
                    os.makedirs(dest_item_parent_dir)
                    print(f"    Created parent directory on Host: {dest_item_parent_dir}")
                except OSError as e:
                    print(f"    {Fore.RED}Error creating parent directory {dest_item_parent_dir} on Host: {e}{Style.RESET_ALL}")
                    continue
            if os.path.isdir(full_src_item_path):
                if not os.path.exists(full_dest_item_path):
                    try:
                        os.makedirs(full_dest_item_path)
                        print(f"    Created directory on Host: {full_dest_item_path}")
                        changes_made = True
                    except OSError as e:
                        print(f"    {Fore.RED}Error creating directory {full_dest_item_path} on Host: {e}{Style.RESET_ALL}")
            elif os.path.isfile(full_src_item_path):
                try:
                    shutil.copy2(full_src_item_path, full_dest_item_path)
                    print(f"    Copied file to Host: {full_dest_item_path}")
                    changes_made = True
                except Exception as e:
                    print(f"    {Fore.RED}Error copying file {full_src_item_path} to {full_dest_item_path} on Host: {e}{Style.RESET_ALL}")
            else:
                print(f"    {Fore.YELLOW}Warning: Source item {full_src_item_path} is neither a file nor a directory. Skipping copy.{Style.RESET_ALL}")
    else:
        print("\nNo new items found in the VM's source folder to copy to Host.")

    # --- Phase 2: Delete ---
    if enable_deletions:
        items_to_delete_on_host = host_dest_contents - vm_source_contents
        if items_to_delete_on_host:
            print(f"\nFound {len(items_to_delete_on_host)} item(s) on Host backup folder not present in VM source. Deleting from Host:")
            sorted_items_to_delete = sorted(list(items_to_delete_on_host), key=len, reverse=True)
            
            for item_rel_path_to_delete in sorted_items_to_delete:
                full_path_to_delete_on_host = os.path.join(dest_host_tsclient, item_rel_path_to_delete)
                print(f"  - Processing for deletion from Host: {item_rel_path_to_delete} (Path: {full_path_to_delete_on_host})")

                exists = os.path.exists(full_path_to_delete_on_host)
                is_file = os.path.isfile(full_path_to_delete_on_host)
                is_dir = os.path.isdir(full_path_to_delete_on_host)
                # You can remove the DEBUG prints if you're confident, or keep them for now
                print(f"    DEBUG: Exists: {exists}, Is File: {is_file}, Is Dir: {is_dir}")


                if not exists:
                    print(f"    Info: Item {full_path_to_delete_on_host} no longer exists. Skipping.")
                    continue

                max_retries = 3
                retry_delay_seconds = 2

                for attempt in range(max_retries):
                    operation_succeeded = False
                    try:
                        if is_file:
                            os.remove(full_path_to_delete_on_host)
                            print(f"    Deleted file from Host: {full_path_to_delete_on_host}")
                            changes_made = True
                            operation_succeeded = True
                        elif is_dir:
                            shutil.rmtree(full_path_to_delete_on_host)
                            print(f"    Deleted directory from Host: {full_path_to_delete_on_host}")
                            changes_made = True
                            operation_succeeded = True
                        else: 
                            if os.path.islink(full_path_to_delete_on_host):
                                os.unlink(full_path_to_delete_on_host)
                                print(f"    Deleted symlink from Host: {full_path_to_delete_on_host}")
                                changes_made = True
                                operation_succeeded = True
                            else:
                                print(f"    {Fore.YELLOW}Warning: Item {full_path_to_delete_on_host} is of an unknown type. Skipping explicit deletion.{Style.RESET_ALL}")
                                operation_succeeded = True 
                        
                        if operation_succeeded:
                            break 
                    
                    except FileNotFoundError:
                        print(f"    Info: Item {full_path_to_delete_on_host} already gone (FileNotFound during attempt {attempt+1}).")
                        break 
                    
                    except OSError as e:
                        is_win_error_32 = hasattr(e, 'winerror') and e.winerror == 32
                        
                        if is_win_error_32 and attempt < max_retries - 1:
                            print(f"    {Fore.YELLOW}Warning: Attempt {attempt+1} failed to delete {full_path_to_delete_on_host} due to WinError 32 (file in use). Retrying in {retry_delay_seconds}s...{Style.RESET_ALL}")
                            time.sleep(retry_delay_seconds)
                            exists = os.path.exists(full_path_to_delete_on_host)
                            if not exists:
                                print(f"    Info: Item {full_path_to_delete_on_host} was removed during delay. Skipping further retries.")
                                break
                            is_file = os.path.isfile(full_path_to_delete_on_host)
                            is_dir = os.path.isdir(full_path_to_delete_on_host)
                        else:
                            print(f"    {Fore.RED}Error deleting {full_path_to_delete_on_host} from Host (attempt {attempt+1}): {e}{Style.RESET_ALL}")
                            break 
        else:
            if changes_made: 
                print("\nNo items to delete from Host backup folder.")
    else:
        print("\nDeletion of files on Host is disabled.")

    if changes_made:
        print(f"{Fore.GREEN}\nHost backup folder updated successfully.{Style.RESET_ALL}")
    else:
        print("\nNo changes (copies or deletions) were made to the Host backup folder.")
    return changes_made

# --- Main Execution (to be run from INSIDE THE VM) ---
if __name__ == "__main__":
    print(f"{Style.BRIGHT}Folder Backup Script: VM Local to Host via \\tsclient{Style.NORMAL}")
    print(f"{Style.BRIGHT}===================================================={Style.NORMAL}")
    # ... (rest of your main block, you can colorize other summary prints if you like) ...
    # Example for the final messages:
    # update_occurred = synchronize_vm_to_host_via_tsclient(...)
    # if update_occurred:
    #     print(f"{Fore.GREEN}\nProcess completed. Changes were made to the Host backup folder.{Style.RESET_ALL}")
    # else:
    #     print(f"\nProcess completed. No changes were necessary to the Host backup folder.")
    print(f"Script running at: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    current_time_cest = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=2))) 
    print(f"Current time in CEST: {current_time_cest.strftime('%Y-%m-%d %H:%M:%S %Z%z')}")
    print(f"Location: Saint-Herblain, Pays de la Loire, France (as per user context)")
    print(f"VM User: {os.getlogin()}")

    print("\nConfiguration:")
    print(f"  Source Folder (VM Local): {vm_local_source_folder}")
    print(f"  Backup Destination (Host via \\tsclient): {host_backup_destination_via_tsclient}")
    print(f"  Deletion from Host if not in VM: {delete_files_on_host_if_not_in_vm}")

    update_occurred = synchronize_vm_to_host_via_tsclient(
        vm_local_source_folder,
        host_backup_destination_via_tsclient,
        delete_files_on_host_if_not_in_vm
    )

    if update_occurred:
        print(f"{Fore.GREEN}\nProcess completed. Changes were made to the Host backup folder.{Style.RESET_ALL}")
    else:
        print(f"\nProcess completed. No changes were necessary to the Host backup folder.")