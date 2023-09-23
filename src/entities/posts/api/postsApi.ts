import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, PostListType } from '../types/types';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (build) => ({
        getPosts: build.query<PostListType, string>({
            query: (page) => `/posts?_page=${page}&_limit=10`,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
