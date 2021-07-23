import React from "react";
import { useState, useEffect } from "react";
import { getMyPosts } from "../utils/apis/Post";
import PostItem from "../components/PostItem/PostItem";
import styled from "styled-components";

function MyPostPage() {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;

      const { data } = await getMyPosts(year, month);
      setMyPosts(data);
    })();
  }, []);

  return (
    <MyPostBlock>
      {myPosts
        ? myPosts.map((data) => <PostItem key={data.id} data={data} />)
        : "empty"}
    </MyPostBlock>
  );
}

const MyPostBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default MyPostPage;
