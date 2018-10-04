import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button} from './style';
import { actionCreators} from './store';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
    render (){
        const {loginStatus}=this.props;
        if (!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='account' innerRef={(input)=>{this.account=input}}/>
                        <Input placeholder='password' type='password' innerRef={(input)=>{this.passsword=input}}/>
                        <Button onClick={()=>this.props.login(this.account, this.passsword)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )     
        } else {
            return <Redirect to='/' />
        }
       
    }  
}

const mapState=(state)=>({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch=(dispatch)=>({
    login(accountElem, passswordElem){
        //console.log();
        dispatch(actionCreators.login(accountElem.value, passswordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Login);