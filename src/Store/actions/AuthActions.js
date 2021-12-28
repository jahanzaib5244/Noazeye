import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGETPASSWORD, LOGIN, LOGOUT, RETREIVEDUSER, SEARCH, INCOME, EXPENSE, EDITINCOME, EDITEXPENSE, DECEXPENSE, ASEEXPENSE, DECINCOME, ASEINCOME, ALLINCOME, ALLEXPENSE, COMPANIES } from '../States';
import axios from 'axios';
import { URL } from '../../config/URL'


export const dologin = (email, password, setisinvalid, setloading) => async (dispatch) => {
    setloading(true)
    setisinvalid(null)

    try {
        let logindata = {
            usertoken: null,
            PublicVideo: null,
            PrivateVideo: null,
            data: null
        }

        const res = await axios.get(`${URL}action=login&user_email=${email}&user_password=${password}`)
        console.log(res.data)
        if (res.data.sts == "success") {
            const AllpublicVideo = await axios.get(`${URL}action=video_list&type=public`)
            const AllprivateVideo = await axios.get(`${URL}action=video_list&type=private`)
            logindata.PublicVideo = AllpublicVideo.data.videos_list;
            logindata.PrivateVideo = AllprivateVideo.data.videos_list;
            logindata.usertoken = res.data.user_data.user_id;
            logindata.data = res.data.user_data
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
        console.log(error)
    }

}
export const UpdateProfileApi = (setinvalid,setalertShow,setalertmsg ,setloading,firstName , lastName ,Phone ,Address ,DOB ) => async (dispatch) => {
    try {
        setinvalid(null)
        setloading(true)
        let user_id = await AsyncStorage.getItem('user-id')
        let res=await axios.get(`${URL}action=update_user_profile&user_id=${user_id}&user_first_name=${firstName}&user_last_name=${lastName}&user_phone=${Phone}&user_address=${Address}&user_dob=${DOB}`)
     console.log(res.data)
     if(res.data.sts == 'success'){
        setalertmsg(res.data.msg)
        setalertShow(true)
}else{
    if(res.data.sts == 'danger'){
        setinvalid(res.data.msg)
    }
}
    } catch (error) {
        console.log(error)
    }finally{
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
    }finally{
        setloading(false)
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
export const ApiUpdatePassword = (setinvalid,setloading,oldPassword,Password,ConfirmPassword,setalertMsg,setshow) => async (dispatch) => {
    try {
        setloading(true)
        setinvalid(null)
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`${URL}action=update_password&old_password=${oldPassword}&new_password=${Password}&confirm_password=${ConfirmPassword}&user_id=${user_id}`)
        console.log(res.data)
        if(res.data.sts == 'success'){
            setalertMsg(res.data.msg)
            setshow(true)
        }else{
            if(res.data.sts == "warning"){
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {

    }finally{
        setloading(false)
    }
}


export const GetUser = (setloading) => async (dispatch) => {

    try {

        let getuserdata = {
            usertoken: null,
            PublicVideo: [],
            privateVideo: [],
            data: null,
        }

        let user_id = await AsyncStorage.getItem('user-id')
        if (user_id !== null) {

            const res = await axios.get(`${URL}action=getuser&user_id=${user_id}`)
            if (res.data.sts == 'success') {
                getuserdata.usertoken = res.data.user_data.user_id
                const AllpublicVideo = await axios.get(`${URL}action=video_list&type=public`)
                const AllprivateVideo = await axios.get(`${URL}action=video_list&type=private`)
                getuserdata.PublicVideo = AllpublicVideo.data.videos_list
                getuserdata.privateVideo = AllprivateVideo.data.videos_list
                getuserdata.data = res.data.user_data
                console.log('success')
            }
            setloading(false)
        } else {
            setTimeout(() => {
                setloading(false);
            }, 2000);
        }


        dispatch({
            type: RETREIVEDUSER,
            payload: getuserdata
        })
    } catch (error) {
        console.log(error)
    }

}
export const ForgetPasswordApi = (email, setisinvalid, setloading,setalertMsg,setshow) => async (dispatch) => {
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
export const RegisterApi = (setloading, ConfirmPassword, Email, Password, firstName, lastName, position, userName, id) => async (dispatch) => {
    try {
        console.log(setloading, ConfirmPassword, Email, Password, firstName, lastName, position, userName, id)
        setloading(true)
        const res = await axios.get(`${URL}action=register_user&user_first_name=${firstName}&user_last_name=${lastName}&user_email=${Email}&user_password=${ConfirmPassword}&designation=${position}&company_id=${id}&user_name=${userName}`)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}