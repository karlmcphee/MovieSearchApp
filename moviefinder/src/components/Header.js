import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

export default class Header extends React.Component {

  state = { activeItem: this.props.loc, saved: false }
  
  componentDidMount() {
    const n = localStorage.getItem("user")
    if(n) {
      this.setState({saved: true})
    }
    if (this.props.loc === "login") {
      this.setState({saved: true})
    }
  }

  logout = () => {
    localStorage.clear();
    this.setState({saved: false})
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state
  return (
  <div><br /><div style={{float: "right", padding: 30, fontSize: 20}}>{(this.props.loc == 'login' || this.props.loc=='register') ? '' : (this.state.saved===true? <button className="ui button" onClick={this.logout}>Logout</button> : <Link to="/Login">Sign Up/Login</Link>)}<br /></div> 

  <Menu primary>
  <Menu.Menu>
    <Menu.Item
      active={activeItem === 'home'}
      as={NavLink} to="/home"
      name='search'
      onClick={this.handleItemClick}
    />
    <Menu.Item
      as={NavLink} to="/Browse"
      name='browse'
      active={activeItem === 'browse'}
      onClick={this.handleItemClick}
    />
    <Menu.Item
      as={NavLink} to="/Recommended"
      name='recommended'
      active={activeItem === 'recommended'}
      onClick={this.handleItemClick}
    />
    <Menu.Item
      as={NavLink} to="/Cart"
      name='cart'
      active={activeItem === 'cart'}
      onClick={this.handleItemClick}
    />
</Menu.Menu>

  </Menu>    <br /><br /></div>
    )
}
}