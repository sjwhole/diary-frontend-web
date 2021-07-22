import http from "./index";

export const login = async ({ username, password }) => {
  const response = await http.post("/auth/login/", {
    username,
    password,
  });
  const Token = response.data.Token;
  return Token;
};

export const kakaoLogin = async (code) => {
  const response = await http.post("/auth/kakao/login/", {
    code,
  });
  const Token = response.data.Token;
  return Token;
};
