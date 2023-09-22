import styles from './Post.module.scss';
import { IPost } from '../types/types';
import { Button } from '../../../shared/ui/button';
import { useNavigate } from 'react-router-dom';

interface IPostProps {
    post: IPost;
}

export const PostCard = ({ post }: IPostProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.id}>{post.id}</div>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.post_body}>
                    <span className={styles.text}>{`${post.body.slice(
                        0,
                        100
                    )}...`}</span>
                </div>
                <div>
                    <Button
                        text='Go'
                        onClick={() => {
                            navigate(`/posts/${post.id}`);
                        }}
                    />
                </div>
            </div>
        </>
    );
};
