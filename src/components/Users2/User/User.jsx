import React from "react";
import { Link } from "react-router";

const userStyle = {
  border: "2px solid gray",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
};

const User = ({ user }) => {
  const {id, name, email, phone } = user;
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h3>email: {email}</h3>
      <h3>phone: {phone}</h3>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
