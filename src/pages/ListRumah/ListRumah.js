import React from "react";
import styled from 'styled-components'

import CardListRumah from "../../components/CardListRumah";

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
function ListRumah() {
  return (
    <Container>
      <h1>Rumah Dijual</h1>
      <Container1>
        <CardListRumah />
      </Container1>
    </Container>
  );
}

export default ListRumah;
