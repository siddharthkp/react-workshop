import React from 'react'

const Repositories = () =>
  <div className="section repositories">
    <div className="repo">
      <a className="name" href="https://github.com/facebook/react">
        react
      </a>
      <div className="stars">74938</div>
      <div className="clear" />
    </div>
    <div className="repo">
      <a className="name" href="https://github.com/facebook/react-native">
        react-native
      </a>
      <div className="stars">53028</div>
      <div className="clear" />
    </div>
    <div className="repo">
      <a className="name" href="https://github.com/facebook/pop">
        pop
      </a>
      <span className="stars">18103</span>
      <div className="clear" />
    </div>
    <div className="repo">
      <a className="name" href="https://github.com/facebook/fresco">
        fresco
      </a>
      <span className="stars">13369</span>
      <div className="clear" />
    </div>
    <div className="repo">
      <a className="name" href="https://github.com/facebook/jest">
        jest
      </a>
      <span className="stars">11993</span>
      <div className="clear" />
    </div>
  </div>

export default Repositories
