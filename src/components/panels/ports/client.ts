import { invoke } from "@tauri-apps/api";


export async function getListeningProcesses() {
  return await invoke("get_listening_processes");
}