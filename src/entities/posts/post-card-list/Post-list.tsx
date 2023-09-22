import { useNavigate } from 'react-router-dom';
import { PostListType } from '../types/types';
import styles from './Post-list.module.scss';
import { PostCard } from '../post-card/PostCard';
import { useEffect, useRef, useState } from 'react';
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from 'react-virtualized';

interface IPostListProps {
    data: PostListType;
}

export function PostList({ data }: IPostListProps) {
    const cache = useRef(
        new CellMeasurerCache({ fixedWidth: true, defaultHeight: 10 })
    );
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data);
    }, [data]);

    return (
        <>
            {posts && (
                <div style={{ width: '100%', height: '100vh' }}>
                    <AutoSizer>
                        {({ width, height }) => (
                            <List
                                width={width}
                                height={height}
                                rowHeight={100}
                                deferredMeasurementCache={cache.current}
                                rowCount={posts.length}
                                rowRenderer={({
                                    key,
                                    index,
                                    style,
                                    parent,
                                }) => {
                                    const post = posts[index];

                                    return (
                                        <CellMeasurer
                                            key={key}
                                            cache={cache.current}
                                            parent={parent}
                                            columnIndex={0}
                                            rowIndex={index}>
                                            <div
                                                style={style}
                                                className={styles.joke}
                                                onClick={() => {
                                                    navigate(
                                                        `/posts/${post.id}`
                                                    );
                                                }}>
                                                <PostCard post={post} />
                                            </div>
                                        </CellMeasurer>
                                    );
                                }}
                            />
                        )}
                    </AutoSizer>
                </div>
            )}
            {/* <div className={styles.topContainer}>
                {posts &&
                    posts.map((post) => (
                        <div
                            key={post.id}
                            className={styles.joke}
                            onClick={() => {
                                navigate(`/posts/${post.id}`);
                            }}>
                            <PostCard post={post} />
                        </div>
                    ))}
            </div> */}
        </>
    );
}
