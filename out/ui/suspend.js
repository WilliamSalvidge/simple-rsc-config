import { createElement as h, Suspense } from 'react';
const Test = async ({ time })=>{
    await new Promise((res)=>setTimeout(()=>res('Hi'), time));
    return /*#__PURE__*/ h('h4', null, 'I was suspended');
};
export const Suspend = ({ time })=>{
    return /*#__PURE__*/ h(Suspense, {
        fallback: /*#__PURE__*/ h('p', null, 'Loading!!!')
    }, /*#__PURE__*/ h(Test, {
        time
    }, null));
};
