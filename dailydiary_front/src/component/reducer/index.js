import * as types from '../action/ActionTypes';
import { combineReducers } from 'redux';


const userInitState = {
    usercode : '',
    email : '',
}
const loginuserInitState ={
    usercode : ''
}

const user = (state = userInitState, action) => {
    const usercode = Math.floor(Math.random() * (99999-11111) + 11111);
  
    switch(action.type){
        case types.SIGNUP:
            return Object.assign({}, state, {
                email : action.email,
                usercode : usercode
            });
        case types.LOGIN:
        
            return Object.assign({},state, {
                usercode : action.usercode
            });
    
         default:
            return state;
    }    
}

const loginuser = (state = loginuserInitState, action) => {

  
    switch(action.type){
     

        case types.LOGINCHECK:
            return Object.assign({},state , {
                usercode : action.usercode
            })
            
         default:
            return state;
    }    
}

const diaryApp = combineReducers({
    
    user,
    loginuser
});

export default diaryApp;