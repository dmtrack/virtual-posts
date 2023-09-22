import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { http } from '../../../shared/api/index';
import { IPost, PostListType } from '../types/types';

const { API_URL } = http;

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getPosts: build.query<PostListType, string>({
            query: () => `/posts`,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
