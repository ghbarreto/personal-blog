// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import { marked } from 'marked';

type Data = {
  name: string;
};
export default function (req: NextApiRequest, res: NextApiResponse<any>) {
  console.log(req)
  const { pid } = req.query;
  const filePath = `${process.cwd()}/posts/post${pid}.md`;
  const encoding = 'utf8';

  console.log(`pid: ${pid}, filePath: ${filePath}, encoding: ${encoding}, process: ${process.cwd()}`);

  if (!pid) return;

  fs.readFile(
    filePath,
    encoding,
    (err: NodeJS.ErrnoException | null, data: any) => {
      if (err) console.log(err);
      if (!err || data !== undefined) {
        // console.log(`data: ${data}`);

        return res.status(200).send(marked(data.toString()));
      }
    }
  );
}

export const config = {
  api: {
    externalResolver: true,
  },
};
