// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import posts from '../../posts/postList.json'

type Data = {
  id: number;
  title: string;
  card_description: string;
  category: string[];
  date: string;
  subtitle: string;
  post_file: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  if (req.method === 'GET') {
    res.json(posts);
  } else {
    return;
  }
}