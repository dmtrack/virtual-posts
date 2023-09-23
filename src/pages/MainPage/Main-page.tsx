import { useState } from 'react';
import { usePosts } from './usePosts';
import { PostList } from '../../../src/entities/posts/post-card-list/Post-list';

const MainPage = () => {
    return (
        <>
            <PostList />
        </>
    );
};

export default MainPage;
