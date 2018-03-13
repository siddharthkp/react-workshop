import React from 'react'

const UserInfo = props =>
  <div className="section user-info">
    <img className="avatar" src={props.avatar} />
    <a className="name" href={props.url}>
      {props.name}
    </a>
    <div className="description">
      {props.description}
    </div>
  </div>

export default UserInfo
