import type { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';

import ReactModal from '../components/base/Modal';
import { useRouter } from 'next/router';
import { PostContext } from '../context/PostContext';
import PostHeader from '../components/base/PostHeader';
import { helperBackground } from '../styles/utilities';
import DateFormat from '../components/base/DateFormat';
import PostBody from '../components/base/PostBody';

interface Req {
    params?: (string | number | object | undefined)[] | undefined;
}

interface Values extends Req {
    open: boolean;
    fromLanding?: boolean;
}

const PostId: NextPage<Values> = ({ open, fromLanding }) => {
    const { chosenPostFunction, postSelected, addingPosts } = useContext(PostContext);
    const [postContent, setPostContent] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        if (!router.query.posts || router.query.posts === undefined) return;

        (async () => {
            try {
                const { data } = await axios.get(`/api/post/${router.query.posts}`);
                chosenPostFunction(router.query.posts);
                return setPostContent(data);
            } catch (err) {
                console.log('err' + err);
            }
        })();

        return () => {
            setPostContent('');
            addingPosts([]);
        };
    }, [open, router.query.posts, chosenPostFunction, addingPosts]);

    if (!postSelected) return <div>{() => router.push('/')}</div>;

    const displayBlogPost = () => (
        <ReactModal open={open} path={() => router.push('/')}>
            <div style={{ color: 'black' }}>
                {postSelected &&
                    _.map(postSelected, (post: any, index: number) => {
                        if (Number(index) > 2) index -= index;
                        if (!post) return;

                        return (
                            <div key={post.id}>
                                <PostHeader
                                    title={post.title}
                                    color={helperBackground(index)}
                                    date={<DateFormat fontSize="23px" date={post.date} />}
                                    categories={post.category}
                                />
                                <PostBody postBody={postContent} subtitle={post.subtitle} />
                            </div>
                        );
                    })}
            </div>
        </ReactModal>
    );

    return fromLanding ? displayBlogPost() : displayBlogPost();
};

export default PostId;
