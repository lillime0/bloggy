import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_POST } from "../queries/postQueries";
import { UPDATE_POST } from "../mutations/postMutations";

export default function EditPostForm({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [tag, setTag] = useState(post.tag);

  const [updatePost] = useMutation(UPDATE_POST, {
    variables: { id: post.id, title, content, tag },
    refetchQueries: [{ query: GET_POST, variables: { id: post.id } }]
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content || !tag) return;
    updatePost(post.id, { title, content, tag });
  };
  return (
    <section className="update-form">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea value={content} onChange={e => setContent(e.target.value)} />
        <select onChange={e => setTag(e.target.value)} value={tag}>
          <option value="GENERAL">GENERAL</option>
          <option value="QUESTION">QUESTION</option>
          <option value="DISCUSSION">DISCUSSION</option>
          <option value="INFO">INFO</option>
          <option value="WARN">WARN</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
