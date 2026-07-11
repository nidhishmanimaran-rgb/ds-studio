import "./Editor.css";
import MonacoEditor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <div className="editor-container">
      <MonacoEditor
        language="python"
        theme="vs-dark"
        height="100%"
        value={`print("Welcome to Data Science Studio")

import pandas as pd

df = pd.read_csv("data.csv")

print(df.head())
`}
        options={{
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

export default CodeEditor;