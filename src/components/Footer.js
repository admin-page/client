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
  margin-top:40px;
`;
const Container1 = styled.div`
  width: 30%;
`;

// const MenuIcon = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

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
       
      </Container1>
      <Container2>
        <i class="fa fa-copyright" aria-hidden="true"> rumahku.com 2020</i>
      </Container2>
    </SectionFooter>
  );
}

export default Footer;
