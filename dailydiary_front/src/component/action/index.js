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

export const login = (usercode) => {
    return {
        type : types.LOGIN,
        usercode
    }
}

export const logincheck = (usercode) => {
    return {
        type : types.LOGINCHECK,
        usercode
    }
}




