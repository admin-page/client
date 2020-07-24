import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchHouse } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  :hover {
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


const CardBody = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

// eslint-disable-next-line no-extend-native
String.prototype.localIDR = function () {
  return Number(this).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  });
};

function CardListRumah() {
  const dispatch = useDispatch();
  const listHouse = useSelector((state) => state.houses.houses);

  useEffect(() => {
    dispatch(fetchHouse());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {listHouse !== null &&
        listHouse.map((getData) => {
          return (
            <Card key={getData._id}>
              <CardImg>
                <img
                  src={getData.image_url}
                  alt=""
                />
              </CardImg>
              <CardBody>
                <div>
                  <h4 style={{ textAlign: "center" }}>
                    Harga: {`${getData.price}`.localIDR()}
                  </h4>
                </div>
                <div>
                  <h3>{getData.houseTitle}</h3>
                </div>
                <div>
                  <p>{getData.location}</p>
                </div>
              </CardBody>
            </Card>
          );
        })}
    </>
  );
}

export default CardListRumah;
