import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);
  console.log("this is user 2", users2);

  return (
    <div>
      <h2>this is users 2{name}</h2>
    </div>
  );
};

export default Users2;
