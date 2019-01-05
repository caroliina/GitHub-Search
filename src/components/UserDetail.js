import React from 'react'

import BackButton from './BackButton'
import Loader from './Loader'

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      repositories: []
    }

    fetch(`http://api.github.com/users/${props.id}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    }).then((data) => {
      this.setState({user: data})
    }).catch((error) => {
      console.log(error);
    });

    fetch(`http://api.github.com/users/${props.id}/repos`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    }).then((repos) => {
      console.log(repos);
      this.setState({repositories: repos})
    }).catch((error) => {
      console.log(error);
    });

  }

  render() {
    const repositoryList = this.state.repositories.map((r) => <li key={r.name}>{r.name}</li>);
    const user = this.state.user;

    if (!user) {
      return <Loader/>
    }
    return (<div>
      <BackButton/>
      <h3>{user.name}</h3>
      <i>{user.avatar_url && <img alt='avatar' src={`${user.avatar_url}`} width={75}/>}{user.bio}</i>
      <h3>Repositories</h3>
      <div>
        {repositoryList}
      </div>
    </div>)
  }
}

export default UserDetail
