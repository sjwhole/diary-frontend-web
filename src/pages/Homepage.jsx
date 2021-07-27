import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nature from "../static/images/nature.jpeg";

function Homepage() {
  const nickname = localStorage.getItem("nickname");
  return (
    <LoginBlock>
      <section>
        <span id="title">우리의 이야기</span>
      </section>
      <section>
        {localStorage.getItem("JWT") ? (
          <div id="logout">
            <Link to="/post">{`${nickname}님` || "나"}의 이야기로 이동</Link>
            <button
              onClick={() => {
                localStorage.removeItem("JWT");
                window.location.reload(false);
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </section>
    </LoginBlock>
  );
}

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #ededed;
  background-image: url(${nature});
  background-repeat: no-repeat;
  background-size: cover;
  #title {
    font-size: 30px;
    padding: 0.5em 0.5em;
    color: #ffffff;
    background-color: #71daec;
    border-radius: 5%;
  }
  #logout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #7f817b;
      width: 100%;
      border: 0;
      margin-top: 20px;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
  }
  a {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    margin-top: 20px;
    padding: 1em;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
`;

export default Homepage;
