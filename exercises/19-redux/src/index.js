import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./router"
import { Provider } from "react-redux"

import configureStore from "./store"

// configureStore , which encapsulates all reducers
const store = configureStore({})

// Wrap <Main /> Component inside the <Provider/>  to avail store to all child Components
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)
