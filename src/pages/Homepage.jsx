import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <section>
        <span>우리의 이야기</span>
      </section>
      <section>
        <div>
          {localStorage.getItem("JWT") ? (
            <>
              <Link to="/post">로그인 완료! Post로 이동</Link>
              <button
                onClick={() => {
                  localStorage.removeItem("JWT");
                  window.location.reload(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Homepage;
