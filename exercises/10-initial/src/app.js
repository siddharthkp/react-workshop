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
  onSubmit(username) {
    this.setState({ data: { name: 'Loading...' } })
    fetchData(username).then(data => this.setState({ data: data }))
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Header />
        <UserForm onSubmit={this.onSubmit.bind(this)} />
        {this.state.data.name
          ? <div>
              <UserInfo
                name={this.state.data.name}
                avatar={this.state.data.avatar}
                url={this.state.data.url}
                description={this.state.data.description}
              />
              <Repositories repos={this.state.data.repos} />
            </div>
          : null}
      </div>
    )
  }
}
export default App
