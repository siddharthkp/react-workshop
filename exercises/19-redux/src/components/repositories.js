import React from 'react'
import { connect } from 'react-redux'

const Repo = props =>
  <div className="repo">
    <a className="name" href={props.url}>
      {props.name}
    </a>
    <div className="stars">
      {props.stars}
    </div>
    <div className="clear" />
  </div>

const Repositories = ({repoDetail}) =>
  <div className="section repositories">
    {repoDetail.repos &&
      repoDetail.repos.map((repo, index) =>
        <Repo key={index} name={repo.name} url={repo.url} stars={repo.stars} />
      )}
  </div>

function mapStateToProps(state) {
  console.log(state.home.repoDetails)
  return {
      repoDetail : state.home.repoDetails || {}
  }
}

export default connect(mapStateToProps)(Repositories)