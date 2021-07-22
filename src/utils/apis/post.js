import http from "./index";

export async function post({ grade, body }) {
  const response = await http.post(
    "/posts/",
    {
      grade,
      body,
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("JWT"),
      },
    }
  );
  return response;
}
