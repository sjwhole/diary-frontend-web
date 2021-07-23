import React from "react";

function PostItem({ data }) {
  const { grade, body, created_at } = data;
  return (
    <div>
      <span>{grade}</span>
      <span>{body}</span>
      <span>{created_at}</span>
    </div>
  );
}

export default PostItem;
