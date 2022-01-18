// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import { marked } from 'marked';

type Data = {
  name: string;
};
export default async function (req: NextApiRequest, res: NextApiResponse<any>) {
  const { pid } = req.query;
  const filePath = `/posts/post${pid}.md`;
  const encoding = 'utf8';

  console.log(`pid: ${pid}, filePath: ${filePath}, encoding: ${encoding}`);

  if (!pid) return;

  fs.readFile(
    filePath,
    encoding,
    (err: NodeJS.ErrnoException | null, data: any) => {
      if (err) console.log(err);
      if (!err || data !== undefined) console.log(`data: ${data}`);
      return res.status(200).send(marked(data.toString()));
    }
  );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
