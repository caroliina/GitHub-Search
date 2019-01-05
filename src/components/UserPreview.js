import React from 'react'
import {Link} from 'react-router-dom'
import './style/Main.css'

class UserPreview extends React.Component {

  createUserInfo(user) {
    if (user.code !== '200') {
      return (<div>
        No result ({user.code})
      </div>)
    } else {
      return (<div>
        {user.avatar && <img alt='avatar' src={`${user.avatar}`} width={60}/>}
        <span>{
            user.name
              ? user.name
              : '-'
          }</span>
        <span>{user.username}</span>
        <Link to={`repositories/${user.username}`}>Repositories</Link>
      </div>)
    }
  }

  render() {
    const user = this.props.user;
    return (<div>
      <h3>Current search result</h3>
      {
        user
          ? this.createUserInfo(user)
          : 'No result'
      }
    </div>)
  }
}

export default UserPreview
