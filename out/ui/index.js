import { createElement as h, use } from 'react';
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-esm/client';
const initialContentFetchPromise = fetch(`/rsc`);
const initialContentPromise = createFromFetch(initialContentFetchPromise, {
    moduleBaseURL: `${window.location.origin}/ui`
});
const Root = ()=>use(initialContentPromise);
const rootEl = createRoot(document.getElementById('root'));
rootEl.render(h(Root));
