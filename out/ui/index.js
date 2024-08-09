import { Suspense, createElement as h, use } from 'react';
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-esm/client';
const initialContentFetchPromise = fetch(`/rsc`);
const initialContentPromise = createFromFetch(initialContentFetchPromise, {
    moduleBaseURL: `${window.location.origin}/ui`
});
function Root() {
    const content = use(initialContentPromise);
    return content;
}
const rootEl = createRoot(document.getElementById('root'));
rootEl.render(h('div', null, h(Suspense, {
    fallback: h('p', null, 'Loading...')
}, h(Root))));
