import { Fragment, createElement as h } from 'react'

export const App = async () => {
  await new Promise((res) => setTimeout(() => res('Hi'), 5000));
	return h(
		'div',
		{ className: 'app' },
		h(
			'div', { className: 'search' },
			h(Fragment, null,
				h('div', null, null)
        ),
		  h('p', null, 'Hello World'),
	  )
  )
}

