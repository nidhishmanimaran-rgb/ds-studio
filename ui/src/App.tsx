import "./App.css";

import ActivityBar from "./components/ActivityBar/ActivityBar";
import TitleBar from "./components/TitleBar/TitleBar";
import Editor from "./components/Editor/Editor";
import StatusBar from "./components/StatusBar/StatusBar";

function App() {
  return (
    <div className="app">
      <TitleBar />

      <div className="main">
        <ActivityBar />

        <div className="workspace">
          <Editor />
        </div>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;