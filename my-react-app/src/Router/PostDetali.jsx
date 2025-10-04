import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setData(res.data));
    }, [id]);

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link to="/posts">Артқа</Link>
        </div>
    );
}

export default PostDetail;