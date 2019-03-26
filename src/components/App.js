import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MyInfo from "./MyInfo";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header class="Header" />
        <div id="root" />
        <MyInfo class="MyInfo" />
        <Footer class="Footer" />
      </div>
    );
  }
}

export default App;
