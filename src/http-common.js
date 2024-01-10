import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/laravel_project/api",
  headers: {
    "Content-type": "application/json"
  }
});