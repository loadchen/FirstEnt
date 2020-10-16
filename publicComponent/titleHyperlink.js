import React from 'react';

/**
 * 标题超链接
 */
export default function TitleHyperlink(props) {
  return (
    <p className={props.className}>
      <a href={props.titleUrl} target="_blank">
        {props.linkTitle}
      </a>
    </p>
  );
}