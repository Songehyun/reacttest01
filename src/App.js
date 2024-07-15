import React from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const message = "여기가 부모 컴포넌트";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent Component</h1>
        <ChildComponent message={message} />
      </header>
    </div>
  );
}

export default App;
