import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blog-container">
      {error && <p className="error-message">{error}</p>}
      <h1 className="blog-title">Blog Posts</h1>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.id} className="blog-item">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-body">{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
