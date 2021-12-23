import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

interface Values {
  value: [];
  getInitialProps?(context: NextPageContext): Values | Promise<Values>
}

const PostId: NextPage<Values> = ({ value }) => {
  return (
    <Head>
      <title>qwdqwdqwdqwd</title>
      <div dangerouslySetInnerHTML={{__html: value}}></div>
    </Head>
  );
};

PostId.getInitialProps = async ({ req }: any) => {
  console.log(req.params)
  const { data } = await axios.get(`http://localhost:3002/api/post${req.params[0]}`);
  return {
    value: data,
  };
};

export default PostId;
