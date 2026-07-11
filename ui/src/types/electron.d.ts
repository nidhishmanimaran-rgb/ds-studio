export {};

declare global {
  interface Window {
    electronAPI: {
      openFolder: () => Promise<{
        folder: string;
        files: {
          name: string;
          isDirectory: boolean;
        }[];
      } | null>;
    };
  }
}