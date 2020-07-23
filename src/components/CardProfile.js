import React, { useEffect } from "react";
import { logout, fetchProfile } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  margin: auto;
  padding: 20px;
`;

const CardImg = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const CardTitle = styled.div``;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
width:100px;
height:30px;
border-radius:5px;
color:white;
border:none;
background-color:#bb2124;
:hover{
  background-color:red;
  cursor:pointer;
}`;
function CardProfile() {
  const dispatch = useDispatch();

  const dataProfile = useSelector((state) => state.profiles.profiles);


  useEffect(() => {
    dispatch(fetchProfile());
    //eslint-disable-next-line
  }, []);

  const profileView = dataProfile !== null && (
    <>
      <Container>
        <CardTitle>
          <h1>Profile</h1>
        </CardTitle>
        <CardImg>
          <img src={dataProfile.avatar} alt="" />
        </CardImg>
        <div>
          <h1>{dataProfile.fullname}</h1>
        </div>
        <CardContent>
          <i className="fa fa-2x fa-envelope" aria-hidden="true">
            {" "}
            {dataProfile.email} 
          </i>
          <i className="fa fa-2x fa-phone" aria-hidden="true">
            {dataProfile.phone}
          </i>
          <i className="fa fa-2x fa-address-card" aria-hidden="true">
            {dataProfile.address}
          </i>
        </CardContent>
        <Button type="button" onClick={logout}>Logout</Button>
      </Container>
    </>
  );
  return <div>{profileView}</div>;
}

export default CardProfile;
