// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');
const md = require('markdown-it')();
const path = require('path');

type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const { pid } = req.query;

    const file = fs.readFile(`./posts/${pid}.md`, 'utf8', (err: Error, data: string) => {
      if (!err || data !== undefined) return res.status(200).send(md.render(data));

      if(err) res.status(400).send({...err, "success": false});
    });
  } else {
    res.status(400).write('error');
  }
}
