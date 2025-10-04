import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Posts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data));
    }, []);

    return (
        <div>
            <Link to="/">Артқа</Link>
            {data.map(post => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`}>Толығырақ оқу</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;