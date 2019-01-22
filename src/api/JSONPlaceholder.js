import axios from "axios";

const JSONPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPosts = () => JSONPlaceholder.get("/posts");

export const getComments = postId =>
  JSONPlaceholder.get(`/comments?postId=${postId}`);

export const getUser = userId => JSONPlaceholder.get(`/users/${userId}`);

export default JSONPlaceholder;
