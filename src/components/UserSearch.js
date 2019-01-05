import React from 'react'

import UserList from './UserList'
import UserPreview from './UserPreview'
import Loader from './Loader'
import './UserSearch.css'
import './Main.css'

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      currentUser: null,
      users: [],
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getUser(username) {
    this.setState({loading: true});

    let newUser = {};
    const prevState = this.state;

    fetch(`http://api.github.com/users/${username}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    }).then((data) => {
      newUser = {
        id: data.id,
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        code: '200'
      };
      this.setState({users: prevState.users.concat(newUser), currentUser: newUser, loading: false});
    }).catch((error) => {
      newUser = {
        username: username,
        name: 'No name',
        code: error.message
      };
      this.setState({users: prevState.users.concat(newUser), currentUser: newUser, loading: false});
    });
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser(this.state.username);
  }

  render() {
    return (<div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <h3>Search for GitHub users</h3>
          <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e)}/>
        </label>
        <input type='submit' disabled={this.state.username.length < 3} value='Search'/> {this.state.loading && <Loader/>}
      </form>

      <UserPreview user={this.state.currentUser}/>
      <UserList users={this.state.users}/>
    </div>)
  }
}

export default UserSearch
