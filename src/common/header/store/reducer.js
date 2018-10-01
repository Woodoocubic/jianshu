import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState=fromJS({
    focused: false
});

export default (state=defaultState, action)=>{
    if(action.type===constants.SEARCH_FOCUS){
        // immutable 对象set 会结合之前的值，和设置的值，返回全新的对象
        return state.set('focused', true);
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused', false);
    }
    return state;
}