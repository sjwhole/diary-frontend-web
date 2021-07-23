import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Homepage() {
  return (
    <LoginBlock>
      <section>
        <span id="title">우리의 이야기</span>
      </section>
      <section>
        {localStorage.getItem("JWT") ? (
          <div id="logout">
            <Link to="/post">로그인 완료! Post로 이동</Link>
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
  background-color: beige;
  height: 100vh;
  #title {
    font-size: 30px;
  }
  #logout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      margin-top: 15px;
    }
  }
`;

export default Homepage;
