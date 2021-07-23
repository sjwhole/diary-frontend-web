import { httpAuth } from "./index";

export const createPost = async ({ grade, body }) => {
  const response = await httpAuth().post("/posts/", {
    grade,
    body,
  });
  return response;
};

export const getMyPosts = async (year, month) => {
  const response = await httpAuth().get(
    `/posts/my/?year=${year}&month=${month}`
  );
  return response;
};
