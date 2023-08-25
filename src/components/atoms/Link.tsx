import React from 'react'
import type {link} from '@interface/*'


const Link = ({name, url, classes, animate}: link) => {
    return (
        <a href={url} className={`font-[400] flex flex-col group ${classes}`}>
            {name}
            {
                animate
                    ? <span style={{transitionProperty: 'width'}}
                            className={`transition group-hover:w-[80%] ease-in h-[1px] bg-black w-0`}/>
                    : null
            }

        </a>
    )
}

export default Link
