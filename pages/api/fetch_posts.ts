// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import posts from '../../public/posts/postList.json';
import NextCors from 'nextjs-cors';

type Data = {
    id: number;
    title: string;
    card_description: string;
    category: string[];
    date: string;
    subtitle: string;
    post_file: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | any>) {
    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    return res.json(posts);
}
