import React from 'react'
import {Link} from 'react-router-dom'

import './Main.css'
import './UserList.css'

class UserList extends React.Component {

  createUsersList(item) {
    return <li key={item.id}>
      {item.avatar && <img alt='avatar' src={`${item.avatar}`} width={25}/>}
      <span>{
          item.name
            ? item.name
            : '-'
        }</span>
      <span>{item.username}</span>
      <span>{item.code}</span>
      {item.id && <Link to={`repositories/${item.username}`}>Repositories</Link>}
    </li>
  }

  render() {
    const users = this.props.users;
    const usersList = users.map(this.createUsersList);

    return (<div>
      <h3>List of previous searches</h3>
      <div>
        {
          usersList.length > 0
            ? usersList
            : 'No previous searches'
        }
      </div>
    </div>)
  }
}

export default UserList
