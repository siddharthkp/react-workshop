import React from 'react'
import { connect } from 'react-redux'

const UserInfo = ({repoDetail}) =>
  <div className="section user-info">
    <img className="avatar" src={repoDetail.avatar} />
    <a className="name" href={repoDetail.url}>
      {repoDetail.name}
    </a>
    <div className="description">
      {repoDetail.description}
    </div>
  </div>


function mapStateToProps(state) {
  return {
      repoDetail : state.home.repoDetails || {}
  }
}

export default connect(mapStateToProps)(UserInfo)
