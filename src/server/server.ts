import http from 'node:http';
import fs from 'node:fs/promises';
import consts from './constants.js';
import { createElement as h } from 'react'
import { renderToPipeableStream } from 'react-server-dom-esm/server'
import { App } from '../ui/app.js';

const server = new http.Server();

server.on('request', async (req, res) => {
    // do stuff
    if (req.url === undefined) return res.end('no path');
    if (consts.ui.test(req.url)) {
        console.log('in ui')
        const index = await fs.readFile('../ui/index.js', 'utf8');
        res.setHeader('content-type', 'text/javascript');
        res.write(index);
        return res.end();
    }
    if (consts.rsc.test(req.url)) {
        console.log('in rsc')
        const moduleBasePath = new URL('../ui', import.meta.url).href
        const { pipe } = renderToPipeableStream(h(App), moduleBasePath);
        // const { pipe } = renderToPipeableStream(h(App));
        pipe(res);
        return;
    }
    const index = await fs.readFile('../index.html', 'utf8');
    res.setHeader('content-type', 'text/html');
    res.write(index);
    return res.end();
})

server.listen(2603, () => console.log('listening on port 2603'));
