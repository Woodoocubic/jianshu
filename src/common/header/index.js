import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators}  from './store';
import {HeaderWrapper, Logo, Nav, NavItem, Addition, NavSearch, Button, SearchWrapper} from './style';

const Header=(props)=>{
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
                            in={props.focused}
                            classNames="slide" 
                            
                        >
                        <div key="slide content">
                            <NavSearch
                                className={props.focused?'focused':''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                            <i className={props.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
                        </div>
                        </CSSTransition>
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

const mapStateToProps=(state)=>{
    return {
        focused: state.header.get('focused')
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);