import React from 'react';
import OneImageArticleItem from './oneImageArticleItem';
import MoreImagesArticleItem from './moreImagesArticleItem';


function BodyArticleItem(props) {

    if ((props.articleItem.imageItems.length) > 1) {
        return (
            <MoreImagesArticleItem
                articleItem={props.articleItem}
            />
        );
    }

    return (
        <OneImageArticleItem
            articleItem={props.articleItem}
        />
    );
}

export default function BodyArticleList(props) {

    const listArticles = props.bodyList.map(
        (article) => 
        <div>
            <BodyArticleItem
                articleItem={article}
            />
        </div>
        
    );

    return (
        <div className="bodyArticleList">
            {listArticles}
        </div>
    );
}