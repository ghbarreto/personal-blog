import type { NextPage, NextPageContext } from 'next';
import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import axios from 'axios';
import ReactModal from '../components/common/Modal';
import { useRouter } from 'next/router';
import { PostContext } from '../context/PostContext';

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

  console.log(router.query.posts)

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await axios.get(`/api/post/${router.query.posts}`);
        chosenPostFunction(router.query.posts)
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
          <Head>
            <title>Title</title>
          </Head>
          <ReactModal open={open} path={() => router.push('/')}>
            <div style={{ color: 'black' }}>
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
