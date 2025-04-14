import React from "react";
import { useLoaderData } from "react-router";

const ShowDetails = () => {
  const user = useLoaderData();
  const { website, name } = user;
  return (
    <div>
      <h2>user details here</h2>
      <h3>Name: {name}</h3>
      <h3>Website: {website}</h3>
    </div>
  );
};

export default ShowDetails;
