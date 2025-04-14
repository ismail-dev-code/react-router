import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        border: "2pc solid #ffff0030",
        borderRadius: "10px",
        marginTop: "12px",
      }}
    >
      <h2>{title}</h2>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <Link>
        <button onClick={handleNavigate}>Details of: {id}</button>
      </Link>
    </div>
  );
};

export default Post;
