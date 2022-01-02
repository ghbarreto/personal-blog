// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';

type Data = {
  name: string;
};
export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const md = require('markdown-it')();
    const { pid } = req.query;
    const filePath = `./posts/post${pid}.md`;
    const encoding = 'utf8';

    if (!pid || pid === undefined || pid === null) return;
    const file = fs.readFile(
      filePath,
      encoding,
      (err: NodeJS.ErrnoException | null, data: string) => {
        try {
          if (!err || data !== undefined)
            return res.status(200).send(md.render(data));
        } catch (err) {
          if (err) return res.status(404).end();
        }
      }
    );
  } catch (err) {
    res.status(404).end();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
