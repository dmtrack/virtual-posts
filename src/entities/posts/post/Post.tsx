import styles from './Post.module.scss';
import { IPost } from '../types/types';
import { Button } from '../../../shared/ui/button/Button';
import { useNavigate } from 'react-router-dom';

interface IPostProps {
    post: IPost;
}

export const Post = ({ post }: IPostProps) => {
    const navigate = useNavigate();

    return (
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
    );
};
