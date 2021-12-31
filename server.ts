const express = require('express');
const next = require('next');
const PORT = 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();
import type { NextApiRequest, NextApiResponse } from 'next';

app.prepare().then(() => {
  const server = express();
  server.all('*', (req: NextApiRequest, res: NextApiResponse) => {
    return handle(req, res);
  });

  server.listen(PORT || dev, (err: string) => {
    if (err) console.log(err);
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
