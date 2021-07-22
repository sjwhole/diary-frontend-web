import http from "./index"

export async function login({ username, password }) {
  const response = await http.post("/auth/login/", {
    username,
    password,
  });
  const Token = response.data.Token;
  return Token;
}
