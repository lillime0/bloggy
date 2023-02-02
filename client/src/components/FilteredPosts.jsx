import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/postQueries";
import { GET_USERS } from "../queries/userQueries";
import { FaTag, FaUser } from "react-icons/fa";
import PostList from "./PostList";
import Spinner from "./Spinner";

export default function FilteredPosts() {
  const [tag, setTag] = useState("");
  const [userId, setUserId] = useState("");
  const { data } = useQuery(GET_USERS);
  const {
    loading: postsLoading,
    error: postsErr,
    data: postsData,
    refetch
  } = useQuery(GET_POSTS);

  const handleSubmit = e => {
    e.preventDefault();
    if (!tag) {
      return refetch({ filter: { userId } });
    }
    if (!userId) {
      return refetch({ filter: { tag } });
    }
    refetch({ filter: { tag, userId } });
  };

  return (
    <main className="main">
      <form className="filter-form" onSubmit={handleSubmit}>
        <section className="user-filter">
          <label htmlFor="user">
            <FaUser />
          </label>
          <select
            id="user"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            name="userId"
          >
            <option value="">Not set</option>
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
        </section>
        <section className="tag-filter">
          <label htmlFor="tag">
            <FaTag />
          </label>
          <select
            id="tag"
            onChange={e => setTag(e.target.value)}
            value={tag}
            name="tag"
          >
            <option value="">Not set</option>
            <option value="GENERAL">GENERAL</option>
            <option value="QUESTION">QUESTION</option>
            <option value="DISCUSSION">DISCUSSION</option>
            <option value="INFO">INFO</option>
            <option value="WARN">WARN</option>
          </select>
        </section>
        <button type="submit">search</button>
      </form>
      <div className="post-container">
        {postsLoading && <Spinner />}
        {postsErr && <p className="error">Something went wrong</p>}
        {postsData && <PostList postsData={postsData} />}
      </div>
    </main>
  );
}
