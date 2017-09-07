import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    /* set your initial state here */
    this.state = {}
  }
  onChange(event) {
    /*
      the content of the input box are available in
      event.target.value
      You can use it to change the state
    */
  }
  render() {
    return (
      <div className="user-form">
        <img src="logo.png" className="big logo" />
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          placeholder="github username"
        />
        {/* disabled should be decided on a value from state */}
        <button disabled={true}>See profile</button>
      </div>
    )
  }
}

export default UserForm
