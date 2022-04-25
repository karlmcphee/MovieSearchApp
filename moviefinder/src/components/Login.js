import React from 'react'
import axios from 'axios'
import Header from './Header'

class Login extends React.Component {

    state={login: ""}

    handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post("http://localhost:9000/users/login", {
        user: data.get('username'),
        password: data.get('password')
        
    })
        .then(res => {
            this.setState({login: "Login successful"})
            console.log(res.data)
            const user = {name: res.data.name}
            localStorage.setItem('user', user)
            setTimeout(() => { 
                this.props.history.push('/');
              }, 1000)

        }).catch(error => this.setState({login: "Username or password is incorrect"}))
    }


    

    render() {

    return (
        <div><Header loc="login"/>
            <div className="ui container"><form className="ui form" onSubmit={this.handleSubmit}><br />
        <div className='heading'>Enter your username and password.  </div><br /><br />
        <label>Username:</label>
        <input id="username" name="username" type="text" />
        <br /><label>Password:</label>
        <input id="password" name="password" type="text" /><br />< br />
        <button className="ui button primary">Submit</button>
            </form><br />
            <div style={{color: 'orange', fontWeight: 'bold' }}>{this.state.login}</div></div></div>
    )}
}

export default Login
