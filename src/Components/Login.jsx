import React from 'react'
import { useState } from 'react'
import "../Styles/Login.css"

const Login = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = ('');

    const [usernamecolor, setUserNameColor] = useState('');
    const [emailcolor, setEmailColor] = useState('');
    const [passwordcolor, setPasswordColor] = useState('');
    const [confirmpasswordcolor, setConfirmPasswordColor] = useState('');

    const [errorusername, setErrorUserName] = useState('');
    const [erroremail, setErrorEmail] = useState('');
    const [errorpassword, setErrorPasssword] = useState('');
    const [errorconfirmpassword, setErrorConfirmPassword] = useState('');

    const validate = (e) => {
        e.preventDefault();
        if (username.length > 8) {
            setUserName('');
            setUserNameColor('green');   
        } else {
            setErrorUserName('Enter a name with more than 8 characters');
            setUserNameColor('red');
        }

        if (email.includes("@gmail.com")) {
            setEmailColor('green');
            setEmail('');
        } else {
            setErrorEmail('Email must include @gmail.ocm');
            setEmailColor('red');
        }

        if (password.length > 8) {
            setPasswordColor("green");
            setPassword('');
        } else {
            setErrorPasssword("Password must be more than 8 characters");
            setPasswordColor('red');
        }

        if (password !== "" && password === confirmpassword) {
            setConfirmPassword('');
            setConfirmPasswordColor('green')
        } else {
            setErrorConfirmPassword("password didn't match");
            setConfirmPasswordColor('red');
        }
    };
  return (
    <>
    <div className="card">
        <div className="card-image"></div>
        <form>
            <input type="text" name='username' placeholder='Enter UserName' style={{borderColor: usernamecolor}} value={username} onChange={(e) => setUserName(e.target.value)}/>
            <p className="error">{errorusername}</p>
            <input type="text" name='email' placeholder='Enter Email' style={{borderColor: emailcolor}} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="error">{erroremail}</p>
            <input type="text" name='password' placeholder='Enter Password' style={{borderColor: passwordcolor}} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className="error">{errorpassword}</p>
            <input type="text" name='confirmpassword' placeholder='Confirm Password' style={{borderColor: confirmpasswordcolor}} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <p className="error">{errorconfirmpassword}</p>
            <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
    </div>
    </>
  );
};

export default Login