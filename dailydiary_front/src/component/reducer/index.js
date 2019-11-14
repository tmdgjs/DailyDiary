import * as types from '../action/ActionTypes';
import { combineReducers } from 'redux';

const diarylistInitState ={
    color : 'red'
}

const userInitState = {
    usercode : '',
    email : '',
}
const loginuserInitState ={
    usercode : ''
}

const diary = (state = diarylistInitState ,  action) => {
    

    if(state === undefined){
        return state ; 

        }
    

    switch(action.type){
        case types.READ:
            return state;

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
    diary,
    user,
    loginuser
});

export default diaryApp;