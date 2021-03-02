import React from 'react'
import axios from 'axios'

class Register extends React.Component {

    state={register: ''}

    handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post("http://localhost:9000/users/save", {
        name: data.get('username'),
        email: data.get('email'),
        password: data.get('password')     
    })
        .then(res => {
            this.setState({register: 'Now registered!'})
            localStorage.setItem('user', res.data)
            setTimeout(() => { 
                this.props.history.push('/');
              }, 1000)
        }).catch(error=> {
            this.setState({register: `Registration failed.  Please follow the following guildelines: \n
            -Choose a unique username/email address \n
            -Make sure that your password is 8 or more characters long.`})
        })
    }
    

    render() {

    return (
            <div className="ui container"><form className="ui form" onSubmit={this.handleSubmit}><br />
        <div className='heading'>Enter a valid username, password, and email to register.</div><br /><br />
        <label>Username:</label>
        <input id="username" name="username" type="text" />
        <br /><label>Password:</label>
        <input id="password" name="password" type="password" />
        <label>Email:</label>
        <input id="email" name="email" type="email" /><br /><br />
        <button className="ui button primary">Submit</button>
            </form><br /><br />
            <div style={{color: 'orange', fontWeight: 'bold' }}>{this.state.register}</div></div>
    )}
}

export default Register
