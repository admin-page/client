import React from "react";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  justify-content: space-evenly;
`;

const InputGroup = styled.div`
display:flex;
flex-direction:column;
width:80%;
text-align:center;`

const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  background-color: #c5d1c8;
  border: none;
  padding:14px;
  box-sizing:border-box;
  margin:10px;
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
  color:white;
  :hover{
      background-color: lightblue;
  }
`;

function Register() {
  return (
    <Container>
      <h1>Register</h1>
      <Container1>
        <Form>
        <InputGroup>
            <label for="fullname">Fullname</label>
            <Input type="fullname" name="fullname" placeholder="Enter Your Fullname" />
          </InputGroup>
        <InputGroup>
            <label for="username">Username</label>
            <Input type="text" name="username" placeholder="Enter Your Username" />
          </InputGroup>
          <InputGroup>
            <label for="email">Email</label>
            <Input type="email" name="email" placeholder="Enter Email Address" />
          </InputGroup>
          <InputGroup>
            <label for="password">Password</label>
            <Input
              id=""
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </InputGroup>

          <Button>Sign Up</Button>
          <span>Alreay have an account? Sign in</span>
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
