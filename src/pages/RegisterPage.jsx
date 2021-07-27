import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { register } from "../utils/apis/Auth";
import styled from "styled-components";

function LoginPage() {
  const histroy = useHistory();
  const [input, setInput] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const [errMessage, setErrMessage] = useState("");

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, nickname, password, passwordCheck } = input;
    if (username.length < 5) {
      setErrMessage("ID는 5글자 이상이어야합니다.");
      return;
    }
    if (!nickname) {
      setErrMessage("닉네임을 입력해주세요.");
      return;
    }
    if (!password) {
      setErrMessage("비밀번호를 입력해주세요.");
      return;
    }
    if (password !== passwordCheck) {
      setErrMessage("비밀번호가 일치 하지 않습니다.");
      return;
    }
    (async () => {
      try {
        const { Token, nickname } = await register(input);
        localStorage.setItem("JWT", Token);
        localStorage.setItem("nickname", nickname);
        histroy.push("/post");
      } catch (e) {
        const errObj = e.response.data;
        let errString = "";
        for (const err in errObj) {
          errString += errObj[err].join("\n");
        }
        console.log(errString);
        setErrMessage(errString);
      }
    })();
  }

  return localStorage.getItem("JWT") ? (
    <Redirect to="/post" />
  ) : (
    <LoginBlock>
      <h1>회원가입</h1>
      <div id="register">
        <form>
          <input
            type="text"
            name="username"
            placeholder="id"
            value={input.username}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="nickname"
            placeholder="nickname"
            value={input.nickname}
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={input.password}
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="passwordCheck"
            placeholder="password check"
            value={input.passwordCheck}
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleSubmit}>
            LOGIN
          </button>
        </form>
        {errMessage.split("\n").map((err, idx) => (
          <p key={idx}>{err}</p>
        ))}
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
  #register {
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
    }
  }
  p {
    margin: 0.1em;
  }
`;

export default LoginPage;
