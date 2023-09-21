import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { postId } = useParams();
    console.log(postId);

    return <div>AboutPage</div>;
};

export default PostPage;
