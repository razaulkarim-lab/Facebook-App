import React, { useEffect, useState } from "react";
import API from "../api";
import CreatePost from "./CreatePost";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      <CreatePost onPostCreated={fetchPosts} />
      {posts.map((post, idx) => (
        <div key={idx}>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
