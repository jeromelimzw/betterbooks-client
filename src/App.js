import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </React.Fragment>
  );
};

export default App;
