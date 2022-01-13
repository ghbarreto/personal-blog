import type { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';

import ReactModal from '../components/common/Modal';
import { useRouter } from 'next/router';
import { PostContext } from '../context/PostContext';
import PostHeader from '../components/common/PostHeader';
import { helperBackground } from '../styles/utilities';
import { Post } from '../types/types';
import DateFormat from '../components/common/DateFormat';
import PostBody from '../components/common/PostBody'

interface Req {
  params?: (string | number | object | undefined)[] | undefined;
}

interface Values extends Req {
  value?: any;
  open: boolean;
  fromLanding?: boolean;
}

const PostId: NextPage<Values> = ({ value, open, fromLanding }) => {
  const { chosenPostFunction, postSelected } = useContext(PostContext);
  const [postContent, setPostContent] = useState<string>('');
  const router = useRouter();

  console.log('posts selected' + postSelected);

  useEffect(() => {
    if (!router.query.posts || router.query.posts === undefined) return;
    const request = async () => {
      try {
        const { data } = await axios.get(`/api/post/${router.query.posts}`);
        chosenPostFunction(router.query.posts);
        return setPostContent(data);
      } catch (err) {
        console.log('errr' + err);
      }
    };
    request();
    return () => setPostContent('');
  }, [open, router.query.posts, chosenPostFunction]);

  if (!postSelected) return <div>{() => router.push('/')}</div>;
  
  console.log("postSelect inside [postid]" + postSelected)

  return (
    <>
      {fromLanding ? (
          <ReactModal open={open} path={() => router.push('/')}>
            <div style={{ color: 'black' }}>
              {postSelected &&
                _.map(postSelected, (post: Post, index: number) => {
                  if (Number(index) > 2) index -= index;
                  if (!post) return;
                  return (
                    <>
                      <PostHeader
                        title={post.title}
                        color={helperBackground(index)}
                        date={<DateFormat fontSize="23px" date={post.date} />}
                        categories={post.category}
                      />
                      <PostBody postBody={postContent} subtitle={post.subtitle}/>
                    </>
                  );
                })}
            </div>
          </ReactModal>
      ) : (
        <ReactModal open path={() => router.push('/')}>
          <div style={{ color: 'black' }}>
            qwepoqwekqowkepoqwked
            <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
          </div>
        </ReactModal>
      )}
    </>
  );
};

export default PostId;
