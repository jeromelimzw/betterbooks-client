import React, { Component } from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navinfo: [
        { link: "/userlib", icon: "book", label: "Your Books" },
        { link: "/newbook", icon: "plus", label: "Add Book" },
        { link: "/community", icon: "users", label: "Community" },
        { link: "/myinfo", icon: "user", label: "Account" }
      ]
    };
  }

  render() {
    return (
      <Menu widths={4} borderless fixed="bottom">
        <Container>
          {this.state.navinfo.map(a => (
            <Menu.Item>
              <Link
                to={a.link}
                activeClassName=" bg-gray white pa2 br3 shadow-5"
              >
                <Icon name={a.icon} size="big" className="grow-large " />
                <div>{a.label}</div>
              </Link>
            </Menu.Item>
          ))}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
