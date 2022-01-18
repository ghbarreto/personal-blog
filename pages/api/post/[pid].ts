// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
const md = require('markdown-it')();

type Data = {
  name: string;
};
export default function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { pid } = req.query;
  const filePath = `./posts/post${pid}.md`;
  const encoding = 'utf8';

  console.log(`pid: ${pid}, filePath: ${filePath}, encoding: ${encoding}`);

  if (!pid) return;
  const file = fs.readFile(
    filePath,
    encoding,
    (err: NodeJS.ErrnoException | null, data: string) => {
      try {
        if (!err || data !== undefined) console.log(`data: ${data}`);
        return res.status(200).send(md.render(data));
      } catch (err) {
        if (err) return console.log(err);
      }
    }
  );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
