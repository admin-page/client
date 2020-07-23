import React from "react";
import styled from "styled-components";
import jwt_decode from "jwt-decode";

const Button = styled.button`
  background-color: lightgreen;
  border-radius: 10px;
  width: 80px;
  font-size: 14px;
  border: none;
  height: 30px;
  color: white;
  margin: 10px;
  :hover {
    background-color: lightblue;
  }
`;

const Button2 = styled.button`
  background-color: #bb2124;
  border-radius: 10px;
  width: 80px;
  font-size: 14px;
  border: none;
  height: 30px;
  color: white;
  margin: 10px;
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function ButtonHeader() {
  const token = localStorage.getItem("token");
  let tokenDecoded = null;

  if (token !== null) {
    // eslint-disable-next-line
    tokenDecoded = jwt_decode(token)
    
  }

  return (
    <div>
      {token !== null ? (
        <>
          <i className="fa fa-1x fa-user" aria-hidden="true">
            {"   "}
            {`${tokenDecoded.fullname}`.toTitleCase()}
          </i>

          <Button2>Log out</Button2>
        </>
      ) : (
        <>
          <Button>Sign In</Button>

          <Button>Sign up</Button>
        </>
      )}
    </div>
  );
}

export default ButtonHeader;
