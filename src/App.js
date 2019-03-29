import React, { Component } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthed: true };
  }

  loginSuccess = () => {
    this.setState({ isAuthed: true });
  };
  logoutSuccess = () => {
    this.setState({ isAuthed: false });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes
          loggedin={this.state.isAuthed}
          loginSuccess={this.loginSuccess}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
