
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
    ]
});

export default (state=defaultState, action)=>{
    switch (action.type){
        default:
            return state;
    }
}