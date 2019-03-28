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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
