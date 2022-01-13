import {COMPANIES, FORGETPASSWORD, IMAGE, LOGIN, LOGOUT, PRIVATEVIDEO, PUBLICVIDEO, RETREIVEDUSER, } from "../States";



const initialState = {
    loading:true,
    offline:false,
    usertoken: null,
    Companies:[],
    PublicVideo:[],
    PrivateVideo:[],
    ProfilePic:null,
    userData:null
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                usertoken: action.payload.usertoken,
                PublicVideo:action.payload.PublicVideo,
                PrivateVideo: action.payload.PrivateVideo,
                userData:action.payload.data,
                ProfilePic:action.payload.profilePic
            }
        }
        case COMPANIES: {
            return {
                ...state,
                Companies: action.payload
            }
        }
        case PUBLICVIDEO:{
            return{
                ...state,
                PublicVideo:action.payload
            }
        }
        case PRIVATEVIDEO:{
            return{
                ...state,
                PrivateVideo:action.payload
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
                loading:action.payload.loading,
                offline:action.payload.offline,
                usertoken: action.payload.usertoken,
                PublicVideo: action.payload.PublicVideo,
                PrivateVideo: action.payload.privateVideo,
                userData:action.payload.data,
                ProfilePic:action.payload.profilePic
            }
        }
        case IMAGE: {
            return {
                ...state,
                ProfilePic:action.payload
            }
        }
    
      
   
        default:
            return state;
    }

}