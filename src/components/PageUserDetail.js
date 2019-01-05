import React from 'react'
import Container from './Container'
import Header from './Header'
import UserDetail from './UserDetail'

const PageUserDetail = ({match}) => (<div>
  <Header/>
  <Container>
    <UserDetail id={match.params.id}/>
  </Container>
</div>)

export default PageUserDetail
