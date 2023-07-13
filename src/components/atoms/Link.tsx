import React from 'react';
import type {link} from "@interface/*";


const Link = ({name, url}: link) => {
    return (
        <a href={url} className={'text-bb-quincy-black2 font-[300]'}>
            {name}
        </a>
    );
};

export default Link;
