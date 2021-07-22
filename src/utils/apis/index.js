import axios from "axios";

const Token = localStorage.getItem("JWT");

export default axios.create({
  baseURL: "http://localhost:8000",
  header: {
    Authorization: `Bearer ${Token}`,
  },
});
