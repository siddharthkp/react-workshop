import React from 'react'

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

const Repositories = props =>
  <div className="section repositories">
    {props.repos &&
      props.repos.map((repo, index) =>
        <Repo key={index} name={repo.name} url={repo.url} stars={repo.stars} />
      )}
  </div>

export default Repositories
