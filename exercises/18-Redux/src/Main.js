import React, { Component } from 'react'
import Search from './components/Search'
import RepoDetails from './components/RepoDetails'

class Main extends Component {

 
  render()  {
    return (
      <div>
      <Search/>
      <RepoDetails/>
      </div>
    )
  }
}
export default Main