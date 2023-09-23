import styles from './Post.module.scss';
import { IPost } from '../types/types';
import Button from '../../../../src/shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';

interface IPostProps {
    post: IPost;
}

export const PostCard = forwardRef<HTMLDivElement, IPostProps>(function Post(
    { post }: IPostProps,
    ref
) {
    const navigate = useNavigate();
    const postBody = (
        <>
            <div className={styles.id}>ID: {post.id}</div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.body}>{`${post.body.slice(0, 100)}...`}</div>

            <div>
                <Button
                    text='Go'
                    onClick={() => {
                        navigate(`/posts/${post.id}`);
                    }}
                />
            </div>
        </>
    );
    <div className={styles.container}></div>;

    const content = ref ? (
        <article className={styles.container} ref={ref}>
            {postBody}
        </article>
    ) : (
        <article className={styles.container}>{postBody}</article>
    );

    return content;
});
