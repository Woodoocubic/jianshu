import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import axios from 'axios';

class Home extends Component {
    render (){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='this' src="//upload.jianshu.io/admin_banners/web_images/4482/d7c8d6ee9d4b510e2f73a889fc00bda18c26866b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />                   
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
       this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            //console.log(res);
            const action={
                type:'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            dispatch(action);
        })
        
    }
});


export default connect(null, mapDispatch)(Home);