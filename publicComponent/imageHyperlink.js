import React from 'react';


/**
 * 图片超链接
 */
export default function ImageHyperlink(props) {
    return(
        <a className={props.className} href={props.linkUrl} target="_blank">
            <img src={props.imageSrc}></img>
        </a>
    );
}