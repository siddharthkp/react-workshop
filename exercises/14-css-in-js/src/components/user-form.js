import React from 'react'
import Button from './button'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: !this.props.initialUser, username: '' }
  }
  onChange(event) {
    let disabled = true
    if (event.target.value) disabled = false
    this.setState({ disabled: disabled, username: event.target.value })
  }
  onClick() {
    this.props.onSubmit(this.state.username)
  }
  render() {
    return (
      <div className="user-form">
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          placeholder="github username"
          defaultValue={this.props.initialUser}
        />
        <button
          onClick={this.onClick.bind(this)}
          disabled={this.state.disabled}
        >
          See profile
        </button>
      </div>
    )
  }
}

export default UserForm
