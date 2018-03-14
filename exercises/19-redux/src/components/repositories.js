import React from 'react'
import { connect } from 'react-redux'

const Repo = repoDetail =>
  <div className="repo">
    <a className="name" href={repoDetail.url}>
      {repoDetail.name}
    </a>
    <div className="stars">
      {repoDetail.stars}
    </div>
    <div className="clear" />
  </div>

const Repositories = repoDetail =>
  <div className="section repositories">
    {repoDetail.repos &&
      repoDetail.repos.map((repo, index) =>
        <Repo key={index} name={repo.name} url={repo.url} stars={repo.stars} />
      )}
  </div>

function mapStateToProps(state) {
  return {
      repoDetail : state.home.repoDetails || {}
  }
}

export default connect(mapStateToProps)(Repositories)