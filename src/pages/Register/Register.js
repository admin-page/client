import React, { useState } from "react";
import styled from "styled-components";
import { registerUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactFilestack from "filestack-react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
`;

const Form = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  justify-content: space-evenly;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  background-color: #c5d1c8;
  border: none;
  padding: 14px;
  box-sizing: border-box;
  margin: 10px;
`;

const Promo = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: lightgreen;
  border-radius: 8px;
  border: 0px;
  font-weight: bold;
  color: white;
  :hover {
    background-color: lightblue;
  }
`;

const ButtonUpload = styled.button`
  height: 30px;
  border-radius: 10px;
  background-color: #c5d1c8;
  border: none;
  box-sizing: border-box;
  margin: 10px;
  text-align: center;
  width: 95%;
`;

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData, history));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Container1>
        <Form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <InputGroup>
            <label>Fullname</label>
            <Input
              type="fullname"
              name="fullname"
              placeholder="Enter Your Fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
              value={formData.email}
            />
          </InputGroup>
          <InputGroup>
            <label>Phone</label>
            <Input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Address</label>
            <Input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Profile Picture</label>
            <ReactFilestack
              apikey={"AjKZyDReRZ2wx6MJeR8LAz"}
              customRender={({ onPick }) => (
                <div>
                  <ButtonUpload onClick={onPick}>Upload Picture</ButtonUpload>
                </div>
              )}
              onSuccess={(res) =>
                setFormData({ ...formData, avatar: res.filesUploaded[0].url })
              }
            />
          </InputGroup>

          <Button type="submit">Sign Up</Button>
          <span>
            Alreay have an account?{" "}
            <Link exact path to="/login" style={{ textDecoration: "none" }}>
              <span>Sign In</span>
            </Link>
          </span>
        </Form>

        <Promo>
          <img
            src="https://www.rumahku.com/img/rku-promo-register_.jpg"
            alt=""
          />
        </Promo>
      </Container1>
    </Container>
  );
}

export default Register;
