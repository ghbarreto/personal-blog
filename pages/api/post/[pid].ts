// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
const md = require('markdown-it')();

type Data = {
  name: string;
};
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { pid } = req.query;
    const filePath = `./public/posts/post${pid}.md`;
    const encoding = 'utf8';

    console.log(`pid: ${pid}, filePath: ${filePath}, encoding: ${encoding}`);

    if (!pid) return;
    const file = fs.readFile(
      filePath,
      encoding,
      (err: NodeJS.ErrnoException | null, data: any) => {
        try {
          if (!err || data !== undefined) console.log(`data: ${data}`);
          return res.status(200).send(md.render(data));
        } catch (err) {
          if (err) return console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
