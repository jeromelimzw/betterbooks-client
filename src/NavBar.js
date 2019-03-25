import React, { Component } from "react";
import { Menu, Image, Header, Icon, Container } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <Menu borderless stackable className=" flex  justify-between" fixed="top">
        <Container>
          <Menu.Item className="pointer">
            <Link to="/home">
              <Image src="img/logo.png" alt="" width="50" />
            </Link>
            <Header>O.W.L Search</Header>
            <small>...any book is just a hoot away</small>
          </Menu.Item>

          {/* <Menu.Item>
            <Link to="/login">
              <div className="f3 ph3 pv2 bg-light-red white br3  hover-bg-dark-red pointer">
                <Icon name="sign-out" />
                Sign Out
              </div>
            </Link>
          </Menu.Item> */}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
