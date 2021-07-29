import { http } from "./index";

export const login = async ({ username, password }) => {
  const response = await http().post("/auth/login/", {
    username,
    password,
  });
  const data = response.data;
  return data;
};

export const kakaoLogin = async (code) => {
  const response = await http().post("/auth/kakao/login/", {
    code,
  });
  const data = response.data;
  return data;
};

export const register = async ({ username, nickname, password }) => {
  const response = await http().post("/auth/registration/", {
    username,
    nickname,
    password,
  });
  const data = response.data;
  return data;
};
