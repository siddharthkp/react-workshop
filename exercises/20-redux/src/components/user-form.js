import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
  }
  onChange(event) {
    let disabled = true
    if (event.target.value) disabled = false
    this.setState({ disabled: disabled })
  }
  render() {
    return (
      <div className="user-form">
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          placeholder="github username"
        />
        <button disabled={this.state.disabled}>See profile</button>
      </div>
    )
  }
}

export default UserForm
