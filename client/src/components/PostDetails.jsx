import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { FaTrash, FaUser } from "react-icons/fa";
import Spinner from "./Spinner";
import { GET_POST, GET_POSTS } from "../queries/postQueries";
import { DELETE_POST } from "../mutations/postMutations";
import EditPostForm from "./EditPostForm";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id }
  });
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_POSTS }]
  });

  return (
    <section className="post-details">
      {loading && <Spinner />}
      {error && <p className="error">Something went wrong</p>}
      <div className="btn-container">
        <Link to="/" className="btn back-btn">
          Back
        </Link>
        <button className="btn del-btn" onClick={deletePost}>
          <FaTrash />
        </button>
      </div>
      {data && (
        <>
          <h1>{data.post.title}</h1>
          <p className="name">
            <FaUser /> {data.post.user.name}
          </p>
          <div className="meta">
            <p className="tag"> {data.post.tag}</p>
            <p className="date"> {data.post.createdAt}</p>
          </div>
          <p className="name">{data.post.user.name}</p>
          <p className="full-content">{data.post.content}</p>
          <EditPostForm post={data.post} />
        </>
      )}
    </section>
  );
}
