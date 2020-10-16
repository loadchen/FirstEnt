import React from 'react';
import TitleHyperlink from './publicComponent/titleHyperlink';
import ImageHyperlink from './publicComponent/imageHyperlink';
import ArticleTag from './publicComponent/articleTag';

export default function OneImageArticleItem(props) {
  
  var item = props.articleItem;

  return(
    <div className="oneImageArticleItem">
      <ImageHyperlink className="articleImage"
        linkUrl={item.linkUrl}
        imageSrc={item.imageSrc}
      />

      <div>
        <TitleHyperlink className="articleTitle"
          titleUrl={item.linkUrl}
          linkTitle={item.articleTitle}
        />

        <ArticleTag
          iconSrc={item.iconSrc}
          fromWeb={item.fromWeb}
          remarkNum={item.remarkNum}
          publishTime={item.publishTime}
          fromAuthor={item.fromAuthor}
        />
      </div>
    </div>
  );
}  