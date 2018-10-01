import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, Addition, NavSearch, Button, SearchWrapper} from './style';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
        this.handleInputFocus=this.handleInputFocus.bind(this);
        this.handleInputBlur=this.handleInputBlur.bind(this);
    }




    render(){
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
                            in={this.state.focused}
                            classNames="slide" 
                              
                        >
                        <div key="slide content">
                            <NavSearch
                                className={this.state.focused?'focused':''}
                                onFocus={
                                    this.handleInputFocus
                                }
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                            <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
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
        )
    }

    handleInputFocus(){
        this.setState({
            focused:true
        })
    }

    handleInputBlur(){
        this.setState({
            focused:false
        })
    }





}

export default Header;