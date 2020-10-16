import React from 'react';

/**
 * 文章标签
 */
export default function ArticleTag(props) {
  return (
    <div className="articleTag">
      <img className="fromIcon" src={props.iconSrc} />

      <span className="fromWeb">{props.fromWeb}</span>
      <span className="remarkNum">{props.remarkNum}</span>
      <span className="publishTime">{props.publishTime}</span>
      <span className="fromAuthor">{props.fromAuthor}</span>
    </div>
  );
}