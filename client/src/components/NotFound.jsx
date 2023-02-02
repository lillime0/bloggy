import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-fount-sec">
      <section className="not-fount">
        <h1>404</h1>
        <p>Sorry, this page not fount</p>
        <Link to="/" className="not-fount-btn">
          Go back
        </Link>
      </section>
    </section>
  );
}
