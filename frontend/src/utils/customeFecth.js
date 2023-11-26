import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://your-notes-mern-stack-project-server-side.onrender.com",
  // baseURL: "http://localhost:8080/",
});

export default customFetch;
