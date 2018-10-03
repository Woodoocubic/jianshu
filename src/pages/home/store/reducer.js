import {fromJS} from 'immutable';

const defaultState=fromJS({
    topicList: [{
        id: 1,
        title: 'hot topic',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {
            id: 2,
            title: 'hand draw',
            imgUrl:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    articleList:[
        {
            id: 1,
            title: '渗透某福利网站',
            desc: '0*00前言 故事的起因: 然后 没有想到我为了一张SSC安全峰会的门票，义无反顾的走进上了一条不归路，不是一般的坑... 0*01信息收集 首...',
            imgUrl: '//upload-images.jianshu.io/upload_images/48820-2eb6e5b4bba9dcd6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'},
        {
            id: 2,
            title: '渗透某福利网站',
            desc: '0*00前言 故事的起因: 然后 没有想到我为了一张SSC安全峰会的门票，义无反顾的走进上了一条不归路，不是一般的坑... 0*01信息收集 首...',
            imgUrl: '//upload-images.jianshu.io/upload_images/48820-2eb6e5b4bba9dcd6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'},
        {
            id: 3,
            title: '渗透某福利网站',
            desc: '0*00前言 故事的起因: 然后 没有想到我为了一张SSC安全峰会的门票，义无反顾的走进上了一条不归路，不是一般的坑... 0*01信息收集 首...',
            imgUrl: '//upload-images.jianshu.io/upload_images/48820-2eb6e5b4bba9dcd6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'},
        {
            id: 4,
            title: '渗透某福利网站',
            desc: '0*00前言 故事的起因: 然后 没有想到我为了一张SSC安全峰会的门票，义无反顾的走进上了一条不归路，不是一般的坑... 0*01信息收集 首...',
            imgUrl: '//upload-images.jianshu.io/upload_images/48820-2eb6e5b4bba9dcd6?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'}
    ],
    recommendList:[
        {
            id:1,
            imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
        },
        {
            id: 2,
            imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        }
    ]



});

export default (state=defaultState, action)=>{
    switch (action.type){
        default:
            return state;
    }
}