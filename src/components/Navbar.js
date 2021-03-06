import React from "react";
import logo from "../logo.svg";
import { Menu, Container, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  state = { activeItem: "priceData" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu tabular style={{ marginLeft: 0 }}>
        <Container style={{ marginTop: "1em", marginLeft: 0 }}>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} />
            Davout
          </Menu.Item>
          <NavLink to="./" className="link">
            <Menu.Item
              name="priceData"
              active={activeItem === "priceData"}
              content="Price Data"
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="./stats" className="link">
            <Menu.Item
              name="stats"
              active={activeItem === "stats"}
              content="Statistics"
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="./others" className="link">
            <Menu.Item
              name="others"
              active={activeItem === "others"}
              content="Others"
              onClick={this.handleItemClick}
            />
          </NavLink>
        </Container>
      </Menu>
    );
  }
}
