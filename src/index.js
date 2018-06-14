import React from "react";
import ReactDOM from "react-dom";
import "../public/assets/css/index.css";
import "../public/assets/css/App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
