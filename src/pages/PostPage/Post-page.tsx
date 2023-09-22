import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../entities/posts/api/postsApi';
import styles from './Post-page.module.scss';
import { Post } from '../../entities/posts';

const PostPage = () => {
    const { postId } = useParams();
    const { data } = useGetPostsQuery('');
    const post = data && data.filter((p) => p.id === Number(postId));

    return (
        <div className={styles.section}>{post && <Post post={post[0]} />}</div>
    );
};

export default PostPage;
