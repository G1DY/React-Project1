import React from 'react'
import { useState } from 'react'
import "../Styles/Login.css"

const Login = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passwaord, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = ('');

    const [usernamecolor, setUserNameColor] = useState('');
    const [emailcolor, setEmailColor] = useState('');
    const [passwordcolor, setPasswordColor] = useState('');
    const [confirmpasswordcolor, setConfirmPasswordColor] = useState('');

    const [errorusername, setErrorUserName] = useState('');
    const [erroremail, setErrorEmail] = useState('');
    const [errorpassword, setErrorPasssword] = useState('');
    const [errorconfirmpassword, setErrorConfirmPassword] = useState('');
  return (
    <div>Login</div>
  )
}

export default Login