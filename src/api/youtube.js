import axios from "axios";
const KEY = "AIzaSyCnxiYK3pgJi5AeG9alZYw-vbO7NFnW9h4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`,
  },
});
