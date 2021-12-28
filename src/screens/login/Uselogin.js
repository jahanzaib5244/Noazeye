import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dologin } from '../../Store/actions/AuthActions'



export default function Uselogin() {
  const dispatch = useDispatch()


  const [secureText, setsecureText] = useState(true)
  const [isinvalid, setisinvalid] = useState(null)
  const [loading, setloading] = useState(false)


  const doSigninUser = (values) => {
    console.log('press')

    console.log(values)
    dispatch(dologin(values.email, values.password, setisinvalid, setloading))

  }

  return [isinvalid, loading, doSigninUser, setsecureText, secureText]
}