'use client';
import React, { Fragment, createElement as h } from 'react';
const Super = ()=>{
    const [press, setPress] = React.useState(false);
    return h(Fragment, null, h('button', {
        onClick: ()=>setPress(!press)
    }, 'French Press'), press ? h('h2', null, 'French Press False') : h('h3', null, 'French Press True'));
};
export default Super;
