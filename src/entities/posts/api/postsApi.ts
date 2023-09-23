import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, PostListType } from '../types/types';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (build) => ({
        getPostsOnPage: build.query<PostListType, string>({
            query: (page) => `/posts?_page=${page}&_limit=10`,
        }),
        getAllPosts: build.query<PostListType, string>({
            query: () => `/posts`,
        }),
    }),
});

export const { useGetPostsOnPageQuery, useGetAllPostsQuery } = postsApi;
