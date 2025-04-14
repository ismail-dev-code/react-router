import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails from "../../UserDetails/UserDetails";

const userStyle = {
  border: "2px solid gray",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
};

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState();

  const { id, name, email, phone } = user;
  const userDetailsPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
    .then((res) => res.json())
    .then((data) => setShowInfo(data));
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h3>email: {email}</h3>
      <h3>phone: {phone}</h3>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => showInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"}info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading......</span>}>
          <UserDetails userDetailsPromise={userDetailsPromise}></UserDetails>
        </Suspense>
      )}
    </div>
  );
};

export default User;
