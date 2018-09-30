import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, Addition, NavSearch, Button} from './style';

class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active " >Home</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right">A a</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className="writting">Write Article</Button>
                    <Button className="reg">Registe</Button> 
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;