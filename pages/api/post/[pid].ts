// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const md = require('markdown-it')();
import * as fs from 'fs';

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { pid } = req.query;
  const filePath = `./posts/post${pid}.md`;
  const encoding = 'utf8';

  console.log(`pid: ${pid}, filePath: ${filePath}, encoding: ${encoding}`);

  if (!pid) return;
  const file = fs.readFile(
    filePath,
    encoding,
    (err: NodeJS.ErrnoException | null, data: string) => {
      if (!err || data !== undefined)
        return res.status(200).send(md.render(data));
    }
  );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
