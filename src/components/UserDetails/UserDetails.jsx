import React, { use } from 'react';

const UserDetails = ({userDetailsPromise}) => {
    const {name, username} = use(userDetailsPromise)
 
    return (
        <div>
            <p>user name: {username}</p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails;