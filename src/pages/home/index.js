import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import { actionCreators } from './store';
import {BackTop} from './style';

class Home extends PureComponent {



    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    
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
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>Go Top</BackTop>:null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState=(state)=>({
    showScroll: state.getIn(['home', 'showScroll'])
})


const mapDispatch = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());  
    },
    changeScrollTopShow(e){
        if (document.documentElement.scrollTop> 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
        
    }    
});


export default connect(mapState, mapDispatch)(Home);