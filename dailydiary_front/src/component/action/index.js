import * as types from './ActionTypes'

export function read(){
    return {
        type:types.READ
    }

}

export const signup = (email) => {
    return {
        type:types.SIGNUP,
        email
    }

}

export const onChange = async e =>{
    return {
        type:types.ONCHANGE,
        e
    }
    
}



