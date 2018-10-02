import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import {HeaderWrapper, Logo, Nav, NavItem, Addition, NavSearch, Button, SearchWrapper, SearchInfo, SearchInfoTitle,SearchInfoSwitch,SearchInfoItem, SearchInfoList} from './style';

class Header extends Component{
    getListArea=()=>{
        const {focused, list}=this.props;
        if(focused){
            return (
                <SearchInfo >
                <SearchInfoTitle>
                    Hot Topic
                    <SearchInfoSwitch>
                        Switch
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        list.map((item)=>{
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
            
                    }    
                </SearchInfoList>
                </SearchInfo>                        
            )
        }else{
           return null; 
        }
    }


    render(){
        const {focused, handleInputFocus, handleInputBlur}=this.props;
        return (
                    <HeaderWrapper>
                        <Logo />
                            <Nav>
                                <NavItem className="left active " >Home</NavItem>
                                <NavItem className="left">Download App</NavItem>
                                <NavItem className="right">Login</NavItem>
                                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                                <SearchWrapper>
                                    <CSSTransition
                                        timeout={200}
                                        in={this.props.focused}
                                        classNames="slide" 
                                        
                                    >
                                    <div key="slide content">
                                        <NavSearch
                                            className={focused?'focused':''}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                        ></NavSearch>
                                        </div>
                                    </CSSTransition>
                                        <i className={focused?'focused iconfont':'iconfont'}>&#xe614;</i>                        
                                    {this.getListArea()}
                                </SearchWrapper>
                            </Nav>
                            <Addition>
                                <Button className="writting">
                                <i className="iconfont">&#xe615;</i>
                                Write Article</Button>
                                <Button className="reg">Registe</Button> 
                            </Addition>
                    </HeaderWrapper>

        );
    }
}


const mapStateToProps=(state)=>{
    return {
        focused: state.getIn(['header','focused']),
        // state.get('header').get('focused')
        list:state.getIn(['header','list'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);