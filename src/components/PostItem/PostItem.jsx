import React from "react";
import styled from "styled-components";

function PostItem({ data }) {
  const { grade, body, created_at } = data;
  return (
    <PostBlock>
      <span>나의 점수: {grade}점</span>
      <br/>
      <br/>
      <span>나의 이야기: {body}</span>
      <br/>
      <br/>
      <span>작성일: {created_at}</span>
    </PostBlock>
  );
}

const PostBlock = styled.div`
  background-color: #d5ffbd;
  margin-bottom: 2em;
  border-radius: 5%;
  padding: 0.5em 0em;
  width: 100%;
`

export default PostItem;
