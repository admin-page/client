import React from "react";
import CardPopuler from "./CardPopuler";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;



function PopulerSection() {
  return (
    <Container>
      <h1>Populer</h1>
      <Container1>
        <CardPopuler />
      </Container1>
    </Container>
  );
}

export default PopulerSection;
