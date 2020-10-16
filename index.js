import React from 'react';
import ReactDOM from 'react-dom';
import BodyArticleList from './bodyArticleList';
import './index.css';

const item = [
  {
    linkUrl:"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    imageSrc:"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
  },
];

const items = [
  {
    linkUrl:"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    imageSrc:"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
  },
  {
    linkUrl:"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    imageSrc:"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
  },
  {
    linkUrl:"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    imageSrc:"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
  },
  { linkUrl:"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    imageSrc:"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
  },
];

const bodyList = [
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":items
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":item
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":items
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":item
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":items
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":item
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":items
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":item
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":items
  },
  {
    "iconSrc":"//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg",
    "fromWeb":"壹娱乐",
    "remarkNum":" / 365条评论",
    "publishTime":" / 40分钟前",
    "fromAuthor":"#龙涛娱乐  #林允",
    "linkUrl":"http://slide.news.sina.com.cn/c/slide_1_86058_487155.html",
    "imageSrc":"//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png",
    "articleTitle":"乌鲁木齐至西安首趟直达动车开行",
    "imageItems":item
  },
];

  ReactDOM.render(
    <BodyArticleList
      bodyList={bodyList}
    />,
    // <OneImageArticleItem 
    // iconSrc="//res.ilvzan.com/1ent/articleimages/2020/10/01/621e33dd9f0a46099cc5e6d2650f167f.jpg"
    // fromWeb="壹娱乐"
    // remarkNum=" / 365条评论"
    // publishTime=" / 40分钟前"
    // fromAuthor="#龙涛娱乐  #林允"
    // linkUrl="http://slide.news.sina.com.cn/c/slide_1_86058_487155.html"
    // imageSrc="//n.sinaimg.cn/news/transform/590/w240h350/20201012/86e4-kakmcxc9866139.png"
    // articleTitle="乌鲁木齐至西安首趟直达动车开行"
    //  />,
    document.getElementById('root')
  );
  