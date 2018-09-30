import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper=styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo=styled.a.attrs({
    href:'/'
})`
position: absolute;
top: 0;
left: 0;
display: block;
height: 56px;
width: 100px;
border-bottom: 1px solid #f0f0f0;
background: url(${logoPic});
background-size: contain;
`;

export const Nav=styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    margin: 0 auto;
    box-sizing:border-box;
`;
export const NavItem=styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const NavSearch=styled.input.attrs({
    placeholder: 'search'
})`
    width: 160 px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20 px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`;

export const Addition=styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button=styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;
