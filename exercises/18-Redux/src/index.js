// lib imports
import React from 'react' 
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Code imports
import Main from './Main'
import configureStore from './store'

// configureStore , which encapsulates all reducers
const store = configureStore({})

// Wrap <Main /> Component inside the <Provider/>  to avail store to all child Components
ReactDOM.render( 
          <Provider store={store}>
                <Main />
            </Provider>, 
    document.getElementById('root'))