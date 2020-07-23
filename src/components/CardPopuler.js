import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchHouse } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 20px;
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
              <CardHead>
                <img
                  src="https://tpc.googlesyndication.com/simgad/11858561715492708884?"
                  alt=""
                />
              </CardHead>
              <CardImg>
                <img
                  src="https://tpc.googlesyndication.com/simgad/1992713735562351096?"
                  alt=""
                />
              </CardImg>
              <div>
                <div>
                  <h3>{getData.houseTitle}</h3>
                </div>
                <div>
                  <div>
                    <p>{getData.desc}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
    </>
  );
}

export default CardPopuler;
