import { createElement as h, Suspense } from 'react'

const Test = async ({ time }) => {
	await new Promise((res) => setTimeout(() => res('Hi'), time));
	return (h('h4', null, 'I was suspended'));
}

export const Suspend = ({ time }) => {
	return (
		h(Suspense, { fallback: h('p', null, 'Loading!!!') },
			h(Test, { time }, null))
	);
}
