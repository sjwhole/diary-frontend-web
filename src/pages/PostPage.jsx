import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { post } from "../utils/apis/post";

function PostPage() {
  const [input, setInput] = useState({ grade: "", body: "" });

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    post(input).then(alert("Posted!"));
  }

  return localStorage.getItem("JWT") ? (
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
  ) : (
    <Redirect to="/login" />
  );
}

export default PostPage;
