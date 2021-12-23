import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log("server eror");
    alert("An error occurred on the server side");
  }
  return Promise.reject(error);
});

export default {
  post: axios.post,
};
