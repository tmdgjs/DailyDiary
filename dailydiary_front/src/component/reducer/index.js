import * as types from '../action/ActionTypes';
import { combineReducers } from 'redux';

const diarylistInitState ={
    color : 'red'
}

const userInitState = {
    usercode : '',
    email : ''
}

const diary = (state = diarylistInitState ,  action) => {
    
    console.log(state,action)
    if(state === undefined){
        return state ; 

        }
    

    switch(action.type){
        case types.READ:
            return state;
        case types.SIGNUP:
            return Object.assign({}, state, {
                
            });
        default:
            return state;
    }        
}

const user = (state = userInitState, action) => {
    const usercode = Math.floor(Math.random() * (99999-11111) + 11111);
    switch(action.type){
        case types.SIGNUP:
            return Object.assign({}, state, {
                email : action.email,
                usercode : usercode
            });
        case types.ONCHANGE:
            return onchange();
            
         default:
            return state;
    }    
}
    
const diaryApp = combineReducers({
    diary,
    user
});

export default diaryApp;