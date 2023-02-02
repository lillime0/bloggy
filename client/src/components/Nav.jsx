import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-title" title="home">
          Bloggy
        </Link>
        <ul className="navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={openModal}>New Post</button>
          </li>
        </ul>
      </nav>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
