import React from "react";
import styled from "styled-components";
import CardRecomend from "./CardRecomend";

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-evenly;
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

function RecomendSection() {
  return (
    <Container>
        <h1>Rekomendasi</h1>
      <Container1>
        <CardRecomend />
      </Container1>
    </Container>
  );
}

export default RecomendSection;
