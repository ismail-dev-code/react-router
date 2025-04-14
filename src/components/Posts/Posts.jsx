import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>this is my post: {posts.length}</h2>
            <div>
                {
                    posts.map(post=> <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;