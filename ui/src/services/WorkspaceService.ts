export async function openWorkspace() {
  return await window.electronAPI.openFolder();
}