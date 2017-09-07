import React from 'react'
import Header from './components/header'
import UserForm from './components/user-form'
import UserInfo from './components/user-info'
import Repositories from './components/repositories'
import fetchData from './data-fetcher'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm />
        <div>
          <UserInfo
            name={this.props.data.name}
            avatar={this.props.data.avatar}
            url={this.props.data.url}
            description={this.props.data.description}
          />
          <Repositories repos={this.props.data.repos} />
        </div>
      </div>
    )
  }
}
export default App
