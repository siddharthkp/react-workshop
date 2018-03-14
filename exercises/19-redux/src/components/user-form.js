import React from 'react'
import { connect } from 'react-redux'

import { get } from '../data-fetcher'
import { setBusy, storeResult } from '../actions'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true,userName: ''}
    this.onSearchUserClick = this.onSearchUserClick.bind(this)
  }

  onChange(userName) {
    let disabled = true
    if (userName) disabled = false
    this.setState({ disabled: disabled })
    this.setState({userName})

  }

  onSearchUserClick() {
    if(this.props.busy) {
      return 
    }

    this.props.dispatch(setBusy(true))
    get(`https://github-user.now.sh?username=${this.state.userName}`)
        .then(data => {
          this.props.dispatch(setBusy(false))
          this.props.dispatch(storeResult(data.data))
    })
  }

  render() {
    return (
      <div className="user-form">
        <input
          onChange={event => this.onChange(event.target.value)}
          type="text"
          placeholder="github username"
          value={this.state.userName}
        />
        <button className={this.props.busy ? 'busy' : ''}  onClick={this.onSearchUserClick} disabled={this.state.disabled}>See profile</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    busy : state.home.busy
  }
}

export default connect(mapStateToProps)(UserForm)