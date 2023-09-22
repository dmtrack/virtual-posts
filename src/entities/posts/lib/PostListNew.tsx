import { IPost, PostListType } from '../types/types';
import { FC, useRef, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { PostCard } from '../post-card/PostCard';
import { STEP, round10 } from './constants';

interface PostListProps {
    posts: PostListType;
    generatePage: (start: number, end: number) => void;
}

export const PostListNew: FC<PostListProps> = ({ posts, generatePage }) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const [usersLength, setUsersLength] = useState(posts.length);

    const loadUsers = (startIndex: number, stopIndex: number) => {
        startIndex = round10(startIndex) + STEP * 2;
        setUsersLength(posts.length);
        if (stopIndex >= posts.length - 2) {
            generatePage(startIndex, round10(startIndex) + STEP);
        }
    };
    const Row = ({ index, style }: ListChildComponentProps) => {
        const post = posts[index];
        return <PostCard post={post} />;
    };

    const isItemLoaded = () => {
        return false;
    };
    // console.log(users);

    return (
        <div className='rounded mb-5' ref={tableContainerRef}>
            <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={usersLength < 40 ? 40 : usersLength}
                loadMoreItems={loadUsers}>
                {({ onItemsRendered, ref }) => (
                    <FixedSizeList
                        itemCount={posts.length}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                        height={700}
                        width={
                            Number(tableContainerRef.current?.offsetWidth) ||
                            800
                        }
                        itemSize={100}>
                        {Row}
                    </FixedSizeList>
                )}
            </InfiniteLoader>
        </div>
    );
};
