import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createPost } from "../utils/apis/Post";
import styled from "styled-components";

function PostPage() {
  const [input, setInput] = useState({ grade: "", body: "" });

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createPost(input).then(alert("Posted!"));
  }

  return localStorage.getItem("JWT") ? (
    <CreatePostBlock>
      <h1>나의 하루 </h1>
      <div>
        <input
          type="number"
          name="grade"
          placeholder="오늘의 점수 1~5"
          value={input.grade}
          onChange={handleOnChange}
        />
        <textarea
          type="text"
          name="body"
          placeholder="오늘의 이야기"
          value={input.body}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Post
        </button>
      </div>
      <div id="my">
        <Link to="/my">나의 이야기들 보러가기</Link>
        <Link to="/">홈으로</Link>
      </div>
    </CreatePostBlock>
  ) : (
    <Redirect to="/login" />
  );
}

const CreatePostBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > #my {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1.5em 0;
  }
  a {
    text-decoration: none;
    color: black;
    background: #71daec;
    border: 0;
    width: 100%;
    padding: 1em;
    margin: 1.5em 0;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
  }
  input {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
  }
  textarea {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    height: 200px;
    resize: none;
    ::-webkit-input-placeholder {
      text-align: center;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      text-align: center;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      text-align: center;
    }
    :-ms-input-placeholder {
      text-align: center;
    }
  }
  button {
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
`;

export default PostPage;
