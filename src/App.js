import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/store";
import { Home } from "./components/Home";
import "./components/common.css";

function App() {
  const localstore = configStore();
  return (
    <div className="main">
      <Provider store={localstore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
