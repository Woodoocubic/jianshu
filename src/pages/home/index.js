import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';


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
}

export default Home;