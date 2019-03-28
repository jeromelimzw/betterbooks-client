import { Button, Container } from "semantic-ui-react";
import React from "react";
import { NavLink as Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <Container className="mt6 animated fadeIn tc">
      <img
        src="https://png.pngtree.com/element_our/sm/20180329/sm_5abc881cb2505.png"
        alt=""
        width="500"
        centered
        className="mb0"
      />
      <h1 centered className="mt0 mb4">
        You need to login to view this content
      </h1>
      <Link to="login">
        <Button type="submit" color="instagram">
          Proceed to Login
        </Button>
      </Link>
    </Container>
  );
};

export default AccessDenied;
