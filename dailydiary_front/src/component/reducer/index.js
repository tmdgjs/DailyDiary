import {READ} from '../action'
import { combineReducers } from 'redux';

const diarylistInitState ={
    color : 'red'
}

const diary = (state = diarylistInitState ,  action) => {
    
    console.log(state,action)
    if(state === undefined){
        return state ; 

        }
    

    switch(action.type){
        case READ:
            return state;
         default:
            return state;
    }
        
}
    
const diaryApp = combineReducers({
    diary
});

export default diaryApp;