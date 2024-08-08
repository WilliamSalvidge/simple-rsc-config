import { Suspense, createElement as h, startTransition, use } from 'react';
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-esm/client';

// const getGlobalLocation = () =>
//	 window.location.pathname + window.location.search

// const initialLocation = getGlobalLocation()
// const initialContentFetchPromise = fetch(`/rsc${initialLocation}`)
const initialContentFetchPromise = fetch(`/rsc`)
const initialContentPromise = createFromFetch(initialContentFetchPromise)

function Root() {
	const content = use(initialContentPromise)
	return content
}

startTransition(() => {
	createRoot(document.getElementById('root')).render(
		h(
			'div',
			{ className: 'app-wrapper' },
			h(
				Suspense,
				{
					fallback: h('p', null, 'Loading...'),
				},
				h(Root),
			),
		),
	)
})
