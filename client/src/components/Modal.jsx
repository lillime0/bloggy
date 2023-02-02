import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../mutations/postMutations";
import { GET_USERS } from "../queries/userQueries";
import { GET_POSTS } from "../queries/postQueries";
import { FaTimes } from "react-icons/fa";

export default function Modal({ closeModal }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("GENERAL");
  const [userId, setUserId] = useState("1");
  const navigate = useNavigate();

  const { error, data } = useQuery(GET_USERS);
  const [addPost] = useMutation(ADD_POST, {
    variables: { title, content, tag, userId },
    onCompleted: () => navigate("/"),
    update(cache, { data: { addPost } }) {
      const { posts } = cache.readQuery({ query: GET_POSTS });

      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: [...posts, addPost] }
      });
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content) return;
    addPost({ title, content, tag, userId });
    setTitle("");
    setContent("");
    closeModal();
  };
  return (
    <div className="modal-container">
      <section className="modal">
        <span className="close-icon" onClick={closeModal}>
          <FaTimes />
        </span>
        <h2>Add Post</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            aria-label="title"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            name="content"
            aria-label="content"
            placeholder="Enter your content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <select onChange={e => setTag(e.target.value)} value={tag}>
            <option value="GENERAL">GENERAL</option>
            <option value="QUESTION">QUESTION</option>
            <option value="DISCUSSION">DISCUSSION</option>
            <option value="INFO">INFO</option>
            <option value="WARN">WARN</option>
          </select>
          <select value={userId} onChange={e => setUserId(e.target.value)}>
            {data ? (
              data.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))
            ) : (
              <option>Fetching users...</option>
            )}
          </select>
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
}
