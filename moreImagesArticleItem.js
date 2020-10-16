import React from 'react';
import TitleHyperlink from './publicComponent/titleHyperlink';
import ImageHyperlink from './publicComponent/imageHyperlink';
import ArticleTag from './publicComponent/articleTag';

function ArticleListImages(props) {

    const listImages = props.imageItems.map(
        (imageItem) => 
        <div>
            <ImageHyperlink className="articleImage"
                linkUrl={imageItem.linkUrl}
                imageSrc={imageItem.imageSrc}
            />
        </div>
    );

    return (
        <div className="articleListImages">
            {listImages}
        </div>
    );
}

export default function MoreImagesArticleItem(props) {
  
    var item = props.articleItem;

    return (
    <div className="moreImageArticleItem">
        <TitleHyperlink className="articleTitle"
            titleUrl={item.linkUrl}
            linkTitle={item.articleTitle}
        />

        <ArticleListImages
            imageItems={item.imageItems}
        />

        <ArticleTag
            iconSrc={item.iconSrc}
            fromWeb={item.fromWeb}
            remarkNum={item.remarkNum}
            publishTime={item.publishTime}
            fromAuthor={item.fromAuthor}
        />
    </div>
    );
}