import { useGetPostsQuery } from '../../entities/posts/api/postsApi';
import styles from './Main-page.module.scss';
import { PostList } from '../../../src/entities/posts';

const MainPage = () => {
    const { data } = useGetPostsQuery('');
    return (
        <>
            <div className={styles.heading}>Virtual posts</div>
            <div className={styles.section}>
                <PostList data={data} />
            </div>
        </>
    );
};

export default MainPage;
