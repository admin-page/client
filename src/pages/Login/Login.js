import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/actions";

const Container = styled.div`
  display: flex;
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
  height: 40px;
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

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(formData, history));
  };
  return (
    <Container>
      <Container1>
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
            <label>Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={formData.password}
            />
          </InputGroup>

          <Button type="submit">Sign In</Button>
          <span>Don't have an account? Sign up</span>
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

export default Login;
