import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function PostList({ postsData }) {
  return (
    <>
      {postsData.posts.length > 0 ? (
        postsData.posts
          .map(post => {
            const { id, title, content, user } = post;
            return (
              <article key={id} className="post-sec">
                <Link to={`/${id}`} className="title">
                  {title}
                </Link>
                <p className="user">
                  <FaUser /> {user.name}
                </p>
                <p className="content">
                  {content.length > 100
                    ? `${content.substring(0, 100)} ...`
                    : content}
                </p>
              </article>
            );
          })
          .reverse()
      ) : (
        <p>No post left</p>
      )}
    </>
  );
}
