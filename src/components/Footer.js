import React from "react";
import styled from "styled-components";

const SectionFooter = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color:black;
  color:white;
`;
const Container1 = styled.div`
  width: 30%;
`;

const MenuIcon = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container2 = styled.div`
  width: 50%;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`;

function Footer() {
  return (
    <SectionFooter>
      <Container1>
        <MenuIcon>
          <i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i>
          <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-2x fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-2x fa-youtube" aria-hidden="true"></i>
        </MenuIcon>
      </Container1>
      <Container2>
        <p>Tentang Kami</p>
        <p>Kebijakan Privasi</p>
        <p>Syarat Pengunaan</p>
      </Container2>
    </SectionFooter>
  );
}

export default Footer;
