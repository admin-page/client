import React from "react";
import styled from "styled-components";
import ButtonHeader from "./ButtonHeader";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const MenuIcon = styled.div`
  width: 20%;
  align-items: center;
`;

const Img = styled.img`
  width: 200px;
  height: 50px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  color: black;
  flex-wrap: wrap;
  p {
    margin-right: 20px;
  }
`;

function Header() {
  return (
    <Nav>
      <MenuIcon>
        <Link
          exact
          path
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Img src="https://i.pinimg.com/originals/b0/85/2c/b0852cc6d80af646eda9653f8749ebed.png" />
        </Link>
      </MenuIcon>

      <Menu>
        <Link
          exact
          path
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Home</p>
        </Link>

        <Link
          exact
          path
          to="/rumah-dijual"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Rumah Dijual</p>
        </Link>
      </Menu>
      <ButtonHeader />
    </Nav>
  );
}

export default Header;
