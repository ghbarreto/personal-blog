import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import axios from 'axios';

interface Req {
  params?: (string | number | object | undefined)[] | undefined;
}

interface Values extends Req{
  value: any;
}

const PostId: NextPage<Values> = ({ value }) => {
  return (
    <Head>
      <title>qwdqwdqwdqwd</title>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </Head>
  );
};

PostId.getInitialProps = async ({ req }: any): Promise<any> => {
  if (!req.params) return;

  const { data } = await axios.get(
    `http://localhost:3002/api/post${req.params[0]}`
  );

  return {
    value: data,
  };
};

export default PostId;
