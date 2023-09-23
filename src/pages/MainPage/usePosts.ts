import { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../../src/entities/posts/api/postsApi';
import { PostListType } from 'src/entities/posts/types/types';

export const usePosts = (pageNum: number = 1) => {
    const { data, isError, isLoading, error } = useGetPostsQuery(`${pageNum}`);
    const [results, setResults] = useState<PostListType>([]);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        if (data) {
            setResults((prev) => [...prev, ...data]);
            setHasNextPage(Boolean(data.length));
        }
        const controller = new AbortController();

        return () => {
            return controller.abort();
        };
    }, [data]);

    return { isLoading, isError, results, hasNextPage, error };
};
