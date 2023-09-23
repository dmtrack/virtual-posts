import { useParams } from 'react-router-dom';
import styles from './Post-page.module.scss';
import { Post } from '../../entities/posts';

const PostPage = () => {
    return <div className={styles.section}>{<Post />}</div>;
};

export default PostPage;
