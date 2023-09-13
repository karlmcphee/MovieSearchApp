import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

const Register = () => {
    
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post("http://localhost:9000/users/save", {
        name: data.get('username'),
        email: data.get('email'),
        password: data.get('password')     
    })
        .then(res => {
            setErrorMessage('Now registered!')
            localStorage.setItem('user', res.data)
            setTimeout(() => { 
                navigate('/');
              }, 1000)
        }).catch(error=> {
            setErrorMessage(`Registration failed.  Please follow the following guildelines: \n
            -Choose a unique username/email address \n
            -Make sure that your password is 8 or more characters long.`)
        })
    }
   

    return (
        <div><Header loc="login" />

            <div className="ui container"><form className="ui form" onSubmit={handleSubmit}><br />
        <div className='heading'>Enter a valid username, password, and email to register.</div><br /><br />
        <div style={{color: 'red'}}>{errorMessage}</div><br />
        <label>Username:</label>
        <input id="username" name="username" type="text" />
        <br /><label>Password:</label>
        <input id="password" name="password" type="password" />
        <label>Email:</label>
        <input id="email" name="email" type="email" /><br /><br />
        <button className="ui button primary">Submit</button>
            </form><br /><br />
            <div style={{color: 'blue', fontWeight: 'bold', textAlign: "center" }}><Link to="/Login">Login with a registered account here.</Link></div></div>
            </div>
    )
}

export default Register
