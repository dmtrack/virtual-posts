import styles from './Post.module.scss';
import { IPost, PostListType } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../src/shared/ui/button';
import { useSelector } from 'react-redux';
import { useGetAllPostsQuery } from '../api/postsApi';

export const Post = () => {
    const id = useParams();
    const { data } = useGetAllPostsQuery('');
    const post = data && data.filter((p) => p.id === +id.postId)[0];
    const navigate = useNavigate();

    return (
        <>
            {post ? (
                <div className={styles.section}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.text}>{post.body}</div>
                    <div>
                        <Button
                            onClick={() => navigate(-1)}
                            color='green'
                            text='Back'
                        />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}{' '}
        </>
    );
};
