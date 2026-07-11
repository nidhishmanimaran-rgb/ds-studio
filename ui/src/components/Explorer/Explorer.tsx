import "./Explorer.css";

import {
  VscFolder,
  VscFolderOpened,
  VscFile,
} from "react-icons/vsc";

import { FaPython } from "react-icons/fa";

const explorerItems = [
  { id: 1, type: "folder", name: "datasets" },
  { id: 2, type: "folder", name: "notebooks" },
  { id: 3, type: "folder", name: "models" },
  { id: 4, type: "python", name: "app.py" },
  { id: 5, type: "markdown", name: "README.md" },
];

function Explorer() {
  return (
    <div className="explorer">
      <div className="explorer-header">
        EXPLORER
      </div>

      <div className="workspace-title">
        <VscFolderOpened />
        <span>WORKSPACE</span>
      </div>

      {explorerItems.map((item) => (
        <div key={item.id} className="explorer-item">
          {item.type === "folder" && (
            <VscFolder className="folder-icon" />
          )}

          {item.type === "python" && (
            <FaPython className="python-icon" />
          )}

          {item.type === "markdown" && (
            <VscFile className="file-icon" />
          )}

          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Explorer;