import React from "react";
import styled from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom:20px;
  border:1px solid black;
:hover{
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
`;


const CardImg = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const Button =styled.button`
border-radius:5px;
background-color:transparent;
border: lightgreen 1px solid;
padding:5px;
margin-bottom:10px;
`
const CardBody =styled.div`
padding:10px;
box-sizing:border-box;
`

function CardListRumah() {
  return (
    <Card>
      <CardImg>
        <img src="https://tpc.googlesyndication.com/simgad/1992713735562351096?" 
        alt=""/>
      </CardImg>
      <CardBody>
          <div>
                <h4 style={{textAlign:"start"}}>Rp. 398 jt </h4>
          </div>
        <div>
          <h3 >Jaya Imperial Park</h3>
        </div>
        <div>
          <p>
          KM.11 Jl Raya Mauk, Sepatan, Tangerang, Banten
          </p>
        </div>
        <Button>Detail</Button>
      </CardBody>
    </Card>
  );
}

export default CardListRumah;