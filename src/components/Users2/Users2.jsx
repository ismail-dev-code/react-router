import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);
  console.log(users2);

 

  return (
    <div>
      <h2>this is users {users2.length}</h2>
      {
        users2.map(user2=> <div> 
          <h2>{user2.name}</h2>
           </div> )
      }
    </div>
  );
};

export default Users2;
