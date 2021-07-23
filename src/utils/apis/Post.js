import http from "./index";

export const createPost = async ({ grade, body }) => {
  const response = await http().post("/posts/", {
    grade,
    body,
  });
  return response;
};

export const getMyPosts = async (year, month) => {
  const response = await http().get(`/posts/my/?year=${year}&month=${month}`);
  return response;
};
