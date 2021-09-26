import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import Fade from "react-reveal/Fade";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/car/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/my-account");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <LoginHeader>
        <Link to='/'>
          <img src='/images/logo.svg' alt='' />
        </Link>
        <LanguageWrapper>
          <CustomLanguage />
          <span>fr-FR</span>
        </LanguageWrapper>
      </LoginHeader>
      <MainWrapper>
        <Form>
          <h1>Connection:</h1>
          <label htmlFor='email'>Email Adress</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Fade bottom>
            <SignButton onClick={signIn}>Sign in</SignButton>
          </Fade>
          <DividerText>Or</DividerText>
          <Fade bottom>
            <Link to='/sign-up'>
              <CreateButton>Create an account</CreateButton>
            </Link>
          </Fade>
        </Form>
      </MainWrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const LoginHeader = styled.div`
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  border-bottom: solid 1px #131313;
`;
const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 50px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background: #e8e8e8;
  }
  span {
    margin-left: 10px;
    font-weight: 600;
    color: #53565c;
  }
`;
const CustomLanguage = styled(LanguageIcon)``;

const Form = styled.div.attrs({ type: "submit", name: "Sign In" })`
  background: white;
  height: 100vh;
  width: 420px;
  padding: 50px 50px;
  display: flex;
  text-align: start;
  flex-direction: column;
  h1 {
    margin-bottom: 35px;
  }
  label {
    margin-left: 10px;
    font-weight: 600;
    font-size: 15px;
    color: #8d8d8d;
  }
  input {
    height: 35px;
    border-radius: 99px;
    border: none;
    outline: none;
    padding: 20px;
    background: #f5f5f5;
    margin-top: 8px;
    margin-bottom: 18px;
  }
`;
const SignButton = styled.button`
  padding: 10px;
  border-radius: 99px;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  background: #3561d1;
  color: white;
  &:hover {
    background: #1f439c;
    color: white;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DividerText = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 30px 0;
  &::before,
  &::after {
    content: "";
    height: 1px;
    background-color: #dcdcdc;
    flex-grow: 1;
  }
  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

const CreateButton = styled(SignButton)`
  background: white;
  border: 3px solid black;
  color: #131313;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: black;
    color: white;
  }
`;
