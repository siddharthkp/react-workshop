import { BrowserRouter as Router, Route } from "react-router-dom"
import React from 'react'

import App from './app'
import SearchHistory from './components/search-history'

const data = {}

const AppRouter = () => (
  <Router>
      <div>
          <Route exact path="/" render={()=><App data={data}/>}/>
          <Route path="/history" component={SearchHistory} />
      </div>
  </Router>
)

export default AppRouter