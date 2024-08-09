import { Fragment, createElement as h } from 'react';
import Super from './super.js'

export const App = async () => {
  await new Promise((res) => setTimeout(() => res('Hi'), 5000));
	return h(
		'div',
		{ className: 'app' },
		h(
			'div', { className: 'search' },
			h(Fragment, null,
				h('div', null, 'Yo')
        ),
		  h('p', null, 'Hello World'),
      h(Super, null, null)
	  )
  )
}

