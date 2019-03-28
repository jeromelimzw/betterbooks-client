import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
        <h1>Hello, {process.env.SERVER_API_URI} , space</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
