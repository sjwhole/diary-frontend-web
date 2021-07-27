import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../utils/apis/Auth";
import kakao from "../static/images/kakao_login.png";
import styled from "styled-components";

const KAKAO_SOCIAL_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=http://sjcom.site:3000/kakao&response_type=code`;

function LoginPage() {
  const histroy = useHistory();
  const [input, setInput] = useState({ username: "", password: "" });
  const [valid, setValid] = useState(null);

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    (async () => {
      try {
        const { Token, nickname } = await login(input);
        localStorage.setItem("JWT", Token);
        localStorage.setItem("nickname", nickname);
        histroy.push("/post");
      } catch (e) {
        setInput({ ...input, password: "" });
        setValid(false);
      }
    })();
  }

  return localStorage.getItem("JWT") ? (
    <Redirect to="/post" />
  ) : (
    <LoginBlock>
      <h1>로그인</h1>
      <div id="login">
        <form>
          <input
            type="text"
            name="username"
            placeholder="id"
            value={input.username}
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={input.password}
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleSubmit}>
            LOGIN
          </button>
          <p>아이디가 없으신가요?</p>
          <Link to="/register">회원가입하기</Link>
        </form>
        {valid === false && (
          <span
            style={{
              opacity: 1,
              visibility: "visible",
              transition: "all ease 1s",
            }}
          >
            Error
          </span>
        )}
      </div>
      <hr />
      <p>OR</p>
      <div>
        <a href={KAKAO_SOCIAL_URL}>
          <img src={kakao} alt="" />
        </a>
      </div>
    </LoginBlock>
  );
}

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
  #login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > input {
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
      }
      & > button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4caf50;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #ffffff;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
      }
      & > p {
        font-weight: 500;
        margin-top: 1em;
      }
      & > a {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #7f817b;
        width: auto;
        border: 0;
        margin-top: 0.3em;
        padding: 1em;
        color: #ffffff;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      }
    }
  }
  & span {
    margin-top: 2em;
  }
  img {
    margin-top: 2em;
  }
  hr {
    border-color: #9e9e9e;
    margin-top: 2em;
    width: 50%;
  }
  p {
    margin: 0;
  }
`;

export default LoginPage;
