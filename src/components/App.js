import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Header from "./Header";
import MyInfo from "./MyInfo";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header class="Header" />
        <MyInfo />
        <Footer class="Footer" />
      </div>
    );
  }
}

export default App;
