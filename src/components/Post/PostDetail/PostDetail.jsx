import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const {title, body} = post;

    const navigate = useNavigate();
    

    return (
        <div>
            <h2>{title}</h2>
            <h2>{body}</h2>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;