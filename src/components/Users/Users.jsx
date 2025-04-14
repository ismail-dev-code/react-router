import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../Users2/User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>this is users</h2>
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;