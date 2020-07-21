import React from "react";
import styled from "styled-components";



const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom:20px;
`;

const CardHead = styled.div`
  height: 30px;
  margin-bottom: 20px;
  img {
    width: 127px;
  }
`;

const CardImg = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
function CardPopuler() {
  return (
    <Card>
      <CardHead>
        <img src="https://tpc.googlesyndication.com/simgad/11858561715492708884?"
        alt="" />
      </CardHead>
      <CardImg>
        <img src="https://tpc.googlesyndication.com/simgad/1992713735562351096?" 
        alt=""/>
      </CardImg>
      <div>
        <div>
          <h3>Summarecon Mutiara Makassar</h3>
        </div>
        <div>
          <div>
            Blue Crystal Residence dibangun dengan mengusung konsep arsitektur
            tropis kontemporer
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardPopuler;
