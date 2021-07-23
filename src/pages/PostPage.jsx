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
      <div>
        <form>
          <input
            type="number"
            name="grade"
            placeholder="오늘의 점수"
            value={input.grade}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="body"
            placeholder="오늘의 이야기"
            value={input.body}
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Post
          </button>
        </form>
      </div>
      <Link to="/my">나의 이야기들 보러가기</Link>
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
  & > a {
    margin-top: 20px;
  }
`;

export default PostPage;
