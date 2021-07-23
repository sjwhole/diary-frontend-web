import axios from "axios";

export const http = () => {
  const Token = localStorage.getItem("JWT");
  const request = axios.create({
    baseURL: "http://3.34.142.4",
  });
  return request;
};

export const httpAuth = () => {
  const Token = localStorage.getItem("JWT");
  const request = axios.create({
    baseURL: "http://3.34.142.4",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
  return request;
};
