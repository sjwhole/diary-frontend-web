import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { login } from "../utils/apis/login";
import kakao from "../static/images/kakao_login.png";

const KAKAO_SOCIAL_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=http://localhost:3000&response_type=code`;

function LoginPage() {
  const histroy = useHistory();
  const [input, setInput] = useState({ username: "", password: "" });
  const [valid, setValid] = useState(null);

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(input)
      .catch((e) => {
        setInput({ ...input, password: "" });
        setValid(false);
      })
      .then((Token) => {
        if (Token) {
          localStorage.setItem("JWT", Token);
          histroy.push("/post");
        } else {
          setInput({ ...input, password: "" });
          setValid(false);
        }
      });
  }

  return localStorage.getItem("JWT") ? (
    <Redirect to="/post" />
  ) : (
    <>
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
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
      <span> ----- or ------</span>
      <div>
        <a href={KAKAO_SOCIAL_URL}>
          <img src={kakao} alt="" />
        </a>
      </div>
    </>
  );
}

export default LoginPage;
