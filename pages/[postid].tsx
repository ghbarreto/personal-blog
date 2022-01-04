import type { NextPage, NextPageContext } from 'next';
import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import axios from 'axios';
import _ from 'lodash';

import ReactModal from '../components/common/Modal';
import { useRouter } from 'next/router';
import { PostContext } from '../context/PostContext';
import PostHeader from '../components/common/PostHeader';
import { helperBackground } from '../styles/utilities';
import { Post } from '../types/types'
import DateFormat from '../components/common/DateFormat'

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

  console.log(postSelected);

  useEffect(() => {
    if (!router.query.posts || router.query.posts === undefined) return;
    const request = async () => {
      try {
        const { data } = await axios.get(`/api/post/${router.query.posts}`);
        chosenPostFunction(router.query.posts);
        return setPostContent(data);
      } catch (err) {
        console.log(err);
      }
    };
    request();
    return () => setPostContent('');
  }, [open, router.query.posts, chosenPostFunction]);

  return (
    <>
      {fromLanding ? (
        <>
          <ReactModal open={open} path={() => router.push('/')}>
            <div style={{ color: 'black' }}>
              {postSelected && _.map(postSelected, (post: Post, index:number) => {
                if (Number(index) > 2) index -= index;
                if (!post) return;
                return <PostHeader title={post.title} color={helperBackground(index)} date={<DateFormat date={post.date} />} />;
              })}
              Title
              <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
            </div>
          </ReactModal>
        </>
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
