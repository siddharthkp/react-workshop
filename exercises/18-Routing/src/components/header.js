import React from 'react'
import {
  Link
} from 'react-router-dom'

const Header = () =>
  <div className="header">
    <img src="logo.png" className="logo" alt="default" />
    <Link to="/history">Search History </Link>
  </div>

export default Header
