import React, { Component } from "react";
import { Menu, Image, Header, Container } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <Menu borderless stackable className=" flex  justify-between" fixed="top">
        <Container>
          <Menu.Item className="pointer">
            <Link to="/home">
              <Image
                src="https://png.pngtree.com/element_our/sm/20180329/sm_5abc881cb2505.png"
                alt=""
                width="50"
              />
            </Link>
            <Header>
              <span className="gray ml2 fw4 f2">better</span>
              <span className="fw7 f2">books</span>
            </Header>
            <small>...when good is not good enough</small>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
