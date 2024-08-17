import { Fragment, createElement as h } from 'react';
import { Suspend } from './suspend.js';
import { Super } from './super.js';
export const App = ()=>{
    return h('div', null, h('div', {
        className: 'app'
    }, h(Fragment, null, h('div', null, 'Yo')), h('p', null, 'Hello World'), h(Suspend, {
        time: 5000
    }, null), h(Super, null, null)), h(Suspend, {
        time: 10000
    }, null));
};
