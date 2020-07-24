import React from "react";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

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
  const history = useHistory();
  const token = localStorage.getItem("token");
  let tokenDecoded = null;
  
  const logout = () => {
    Swal.fire({
      icon: "success",
      title: "Terimakasih",
    });
    localStorage.clear();
    history.push("/");
  };

  if (token !== null) {
    // eslint-disable-next-line
    tokenDecoded = jwt_decode(token);
  }

  return (
    <div>
      {token !== null ? (
        <>
          <i className="fa fa-1x fa-user" aria-hidden="true">
            {"   "}
            <Link
              to="userprofile"
              style={{ textDecoration: "none", color: "black" }}
            >
              {`${tokenDecoded.fullname}`.toTitleCase()}
            </Link>
          </i>

          <Button2 type="button" onClick={logout}>
            Log out
          </Button2>
        </>
      ) : (
        <>
          <Link exact path to="/login" style={{ textDecoration: "none" }}>
            <Button>Sign In</Button>
          </Link>

          <Link exact path to="/register" style={{ textDecoration: "none" }}>
            <Button>Sign up</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ButtonHeader;
