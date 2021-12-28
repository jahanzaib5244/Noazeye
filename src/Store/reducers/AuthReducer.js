import {COMPANIES, FORGETPASSWORD, LOGIN, LOGOUT, RETREIVEDUSER, } from "../States";



const initialState = {

    usertoken: null,
    Companies:[],
    PublicVideo:[],
    PrivateVideo:[],
    userData:null
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                usertoken: action.payload.usertoken,
                PublicVideo:action.payload.PublicVideo,
                PrivateVideo: action.payload.privateVideo,
                userData:action.payload.data,
            }
        }
        case COMPANIES: {
            return {
                ...state,
                Companies: action.payload
            }
        }

        case LOGOUT: {
            return {
                ...state,
                usertoken: null,
            }
        }
        case FORGETPASSWORD: {
            return {
                ...state
            }
        }
        case RETREIVEDUSER: {
            return {
                ...state,
                usertoken: action.payload.usertoken,
                PublicVideo: action.payload.PublicVideo,
                PrivateVideo: action.payload.privateVideo,
                userData:action.payload.data
            }
        }
    
      
   
        default:
            return state;
    }

}