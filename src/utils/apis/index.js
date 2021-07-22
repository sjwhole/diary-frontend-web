import axios from "axios";

const Token = localStorage.getItem("JWT");

export default axios.create({
  baseURL: "http://3.34.142.4",
  header: {
    Authorization: `Bearer ${Token}`,
  },
});
