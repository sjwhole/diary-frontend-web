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
            <span>HIHI</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Homepage;
