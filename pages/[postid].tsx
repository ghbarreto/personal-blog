import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { NextPageContext } from 'next'

interface Req { 
  req: {
    params?: (string | number | object | undefined)[] | undefined
  }
}

interface Values {
  value: []
}

const PostId: NextPage<Values> = ({ value }) => {
  return (
    <Head>
      <title>qwdqwdqwdqwd</title>
      <div dangerouslySetInnerHTML={{__html: value}}></div>
    </Head>
  );
};

PostId.getInitialProps = async (props: Req) => {
  if (!props.req.params) return;
  const { data } = await axios.get(`http://localhost:3002/api/post${props.req.params[0]}`);
  return {
    value: data,
  };
};

export default PostId;
