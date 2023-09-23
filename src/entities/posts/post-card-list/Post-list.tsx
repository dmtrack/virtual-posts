import { useNavigate } from 'react-router-dom';

import styles from './Post-list.module.scss';
import { PostCard } from '../post-card/PostCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePosts } from '../../../../src/pages/MainPage/usePosts';

export function PostList() {
    const [pageNum, setPageNum] = useState(1);
    const [posts, setPosts] = useState([]);
    const {
        results: data,
        isLoading,
        isError,
        error,
        hasNextPage,
    } = usePosts(pageNum);

    let intObserver = useRef<IntersectionObserver | null>(null);
    const lastPostRef = useCallback(
        (post) => {
            if (isLoading) return;
            if (intObserver.current) intObserver.current.disconnect();
            intObserver.current = new IntersectionObserver((posts) => {
                if (posts[0].isIntersecting && hasNextPage) {
                    console.log('near thee last');
                    setPageNum((prev) => prev + 1);
                }
            });
            if (post) intObserver.current.observe(post);
        },
        [isLoading, hasNextPage]
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);

    const content = data.map((post, i) => {
        if (data.length === i + 1) {
            return <PostCard ref={lastPostRef} key={post.id} post={post} />;
        }
        return <PostCard key={post.id} post={post} />;
    });
    return (
        <>
            {' '}
            {isError && <p className='center'>Error occured...</p>}
            {isLoading && <p className='center'>Loading more posts...</p>}
            <div className={styles.container}>{content}</div>
        </>
    );
}
