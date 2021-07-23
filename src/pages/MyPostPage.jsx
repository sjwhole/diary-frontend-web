import React from "react";
import { useState, useEffect } from "react";
import { getMyPosts } from "../utils/apis/Post";
import PostItem from "../components/PostItem/PostItem";

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
    <div>
      {myPosts
        ? myPosts.map((data) => <PostItem key={data.id} data={data} />)
        : "empty"}
    </div>
  );
}

export default MyPostPage;
