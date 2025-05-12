import React, { useState } from "react";
import API from "../api";

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");

  const submitPost = async () => {
    const userId = localStorage.getItem("userId");
    await API.post("/posts", { content, userId });
    setContent("");
    onPostCreated();
  };

  return (
    <div>
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="What's on your mind?" />
      <button onClick={submitPost}>Post</button>
    </div>
  );
}
