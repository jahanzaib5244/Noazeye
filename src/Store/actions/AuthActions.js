import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGETPASSWORD, LOGIN, LOGOUT, RETREIVEDUSER, PUBLICVIDEO, COMPANIES, PRIVATEVIDEO, IMAGE } from '../States';
import axios from 'axios';
import {ToastAndroid , Platform ,AlertIOS } from 'react-native'
import { URL } from '../../config/URL';


export const dologin = (email, password, setisinvalid, setloading) => async (dispatch) => {
    setloading(true)
    setisinvalid(null)

    try {
        let logindata = {
            usertoken: null,
            PublicVideo: null,
            PrivateVideo: null,
            data: null,
            profilePic: null,
        }

        const res = await axios.get(`${URL}action=login&user_email=${email}&user_password=${password}`)
        console.log(res.data)
        if (res.data.sts == "success") {
            const AllpublicVideo = await axios.get(`${URL}action=video_list&type=public`)
            const AllprivateVideo = await axios.get(`${URL}action=video_list&type=private`)
            logindata.PublicVideo = AllpublicVideo.data.videos_list;
            logindata.PrivateVideo = AllprivateVideo.data.videos_list;
            logindata.usertoken = res.data.user_data.user_id;
            logindata.data = res.data.user_data;
            console.log(res.data.user_data.profile_img_path)
            logindata.profilePic = res.data.user_data.profile_img_path
            setloading(false)
            try {
                await AsyncStorage.setItem('user-id', res.data.user_data.user_id);
            } catch (error) {
                console.log(error)
            }



        } else {
            if (res.data.sts == 'danger') {
                setloading(false)
                console.log(res.data.msg)
                setisinvalid(res.data.msg)
            }
        }

        dispatch({
            type: LOGIN,
            payload: logindata
        })

    } catch (error) {
        setloading(false)
        setisinvalid('No Internet Connection')
        console.log(error)
    }

}
export const UpdateProfileApi = (setinvalid, setalertShow, setalertmsg, setloading, firstName, lastName, Phone, Address, DOB) => async (dispatch) => {
    try {
        setinvalid(null)
        setloading(true)
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`${URL}action=update_user_profile&user_id=${user_id}&user_first_name=${firstName}&user_last_name=${lastName}&user_phone=${Phone}&user_address=${Address}&user_dob=${DOB}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertmsg(res.data.msg)
            setalertShow(true)
        } else {
            if (res.data.sts == 'danger') {
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}

export const dologout = () => async (dispatch) => {
    try {

        AsyncStorage.removeItem('user-id')

        dispatch({
            type: LOGOUT,
        })
    } catch (error) {
        console.log(error)
    }
}


export const PublicVideoApi = (setrefreshing) => async (dispatch) => {
    try {
        setrefreshing(true)
        console.log('public calling')

        let res = await axios.get(`${URL}action=video_list&type=public`)
        console.log(res.data)
        if (res.data.sts == "success") {
            let publicVideo = res.data.videos_list
            setrefreshing(false)
            dispatch({
                type: PUBLICVIDEO,
                payload: publicVideo
            })
        }
    } catch (error) {
        setrefreshing(false)
        console.log(error)
    }
}
export const PrivateVideoApi = (setrefreshing) => async (dispatch) => {
    try {
        setrefreshing(true)

        let res = await axios.get(`${URL}action=video_list&type=private`)
        console.log(res.data)
        if (res.data.sts == "success") {
            let privateVideo = res.data.videos_list
            setrefreshing(false)
            dispatch({
                type: PRIVATEVIDEO,
                payload: privateVideo
            })
        }
    } catch (error) {
        setrefreshing(false)
        console.log(error)
    }
}


export const ctaforgetPassword = () => async (dispatch) => {
    try {


        dispatch({
            type: FORGETPASSWORD,
            payload: null
        })
    } catch (error) {

    }
}
export const ApiUpdatePassword = (setinvalid, setloading, oldPassword, Password, ConfirmPassword, setalertMsg, setshow) => async (dispatch) => {
    try {
        setloading(true)
        setinvalid(null)
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`${URL}action=update_password&old_password=${oldPassword}&new_password=${Password}&confirm_password=${ConfirmPassword}&user_id=${user_id}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertMsg(res.data.msg)
            setshow(true)
        } else {
            if (res.data.sts == "warning") {
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {

    } finally {
        setloading(false)
    }
}


export const GetUser = () => async (dispatch) => {
    let getuserdata = {
        offline: false,
        loading: true,
        usertoken: null,
        PublicVideo: [],
        privateVideo: [],
        data: null,
        profilePic: null,
    }

    try {
console.log('getting user')
        let user_id = await AsyncStorage.getItem('user-id')
        if (user_id !== null) {

            const res = await axios.get(`${URL}action=getuser&user_id=${user_id}`)
            console.log(res.data)
            if (res.data.sts == 'success') {
                getuserdata.usertoken = res.data.user_data.user_id
                const AllpublicVideo = await axios.get(`${URL}action=video_list&type=public`)
                const AllprivateVideo = await axios.get(`${URL}action=video_list&type=private`)
                getuserdata.PublicVideo = AllpublicVideo.data.videos_list
                console.log(AllprivateVideo.data.videos_list)
                getuserdata.privateVideo = AllprivateVideo.data.videos_list
                getuserdata.data = res.data.user_data;
                getuserdata.profilePic = res.data.user_data.profile_img_path
                getuserdata.loading = false
                console.log('success')
                dispatch({
                    type: RETREIVEDUSER,
                    payload: getuserdata
                })
            }else{
                if(res.data.sts == 'danger'){
                    getuserdata.loading = false
                    await AsyncStorage.removeItem('user-id')
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Invalid User' ,  res.data.msg, ToastAndroid.LONG)
                      } else {
                        AlertIOS.alert(res.data.msg);
                      }

                }
                dispatch({
                    type: RETREIVEDUSER,
                    payload: getuserdata
                })
            }

        } else {
            setTimeout(() => {
                getuserdata.loading = false
                dispatch({
                    type: RETREIVEDUSER,
                    payload: getuserdata
                })
            }, 1000);
          
        }

     

    } catch (error) {
        setTimeout(() => {
            console.log('error')
            getuserdata.offline=true
            getuserdata.loading=false
            console.log(error);
        
            dispatch({
              type: RETREIVEDUSER,
              payload: getuserdata
            })
          }, 3000);
    }
    
}
    export const offfline=(setloading)=>async(dispatch)=>{
        setloading(true)
        let getuserdata = {
            offline: false,
            loading: true,
            usertoken: null,
            PublicVideo: [],
            privateVideo: [],
            data: null,
            profilePic: null,
        }
        try {

            let user_id = await AsyncStorage.getItem('user-id')
            if (user_id !== null) {
    
                const res = await axios.get(`${URL}action=getuser&user_id=${user_id}`)
                console.log(res.data)
                if (res.data.sts == 'success') {
                    getuserdata.usertoken = res.data.user_data.user_id
                    const AllpublicVideo = await axios.get(`${URL}action=video_list&type=public`)
                    const AllprivateVideo = await axios.get(`${URL}action=video_list&type=private`)
                    getuserdata.PublicVideo = AllpublicVideo.data.videos_list
                    console.log(AllprivateVideo.data.videos_list)
                    getuserdata.privateVideo = AllprivateVideo.data.videos_list
                    getuserdata.data = res.data.user_data;
                    getuserdata.profilePic = res.data.user_data.profile_img_path
                    getuserdata.loading = false
                    console.log('success')
                }
    
            } else {
                setTimeout(() => {
                    getuserdata.loading = false
                }, 2000);
            }
    
            dispatch({
                type: RETREIVEDUSER,
                payload: getuserdata
            })
    
        }catch (error) {
            setTimeout(() => {
                console.log('error')
                getuserdata.offline=true
                getuserdata.loading=false
                console.log(error);
            
                dispatch({
                  type: RETREIVEDUSER,
                  payload: getuserdata
                })
                setloading(false)
              }, 3000);
        }
      }





export const ForgetPasswordApi = (email, setisinvalid, setloading, setalertMsg, setshow) => async (dispatch) => {
    try {
        setisinvalid(null)
        console.log('api call')
        setloading(true)
        const res = await axios.get(`${URL}action=forgot_password_module&user_email=${email}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertMsg(res.data.msg)
            setshow(true)
        } else {
            if (res.data.sts == 'danger') {
                console.log('invalid', res.data.msg)
                setisinvalid(res.data.msg)
            }
        }
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}

export const listCompanies = (getCompanies) => async (dispatch) => {
    let companies = []
    getCompanies(true)
    try {
        const res = await axios.get(`${URL}action=business_list`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            companies = res.data.data
        }
        dispatch({
            type: COMPANIES,
            payload: companies
        })
    } catch (error) {
        console.log(error)
    } finally {
        getCompanies(false)
    }
}
export const RegisterApi = (setinvalid, setshow, setalertMsg, setloading, ConfirmPassword, Email, Password, firstName, lastName, position, userName, id) => async (dispatch) => {
    try {
        setinvalid(null)
        console.log(setloading, ConfirmPassword, Email, Password, firstName, lastName, position, userName, id)
        setloading(true)
        const res = await axios.get(`${URL}action=register_user&user_first_name=${firstName}&user_last_name=${lastName}&user_email=${Email}&user_password=${ConfirmPassword}&designation=${position}&company_id=${id}&user_name=${userName}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertMsg(res.data.msg)
            setshow(true)
        } else {
            if (res.data.sts == 'danger') {
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}
export const uploadImage = (base64) => async (dispatch) => {
    try {
        var profile_pic = ""

        const imagedata = new FormData
        imagedata.append('img', base64)
        const userid = await AsyncStorage.getItem('user-id');

        const res = await axios.post(`${URL}action=update_profile_pic&user_id=${userid}`, imagedata)
        console.log(res)
        if (res.data.sts == 'success') {
            profile_pic = res.data.img_path

        }
        dispatch({
            type: IMAGE,
            payload: profile_pic
        })
    } catch (error) {

    }

}


