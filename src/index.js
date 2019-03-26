import React from "react";
import ReactDOM from "react-dom";
import Boostrap from "bootstrap";
import Jquery from "jquery";
import Popper from "popper";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<App />, $("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();