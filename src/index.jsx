import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppState from './AppState'
import TodoList from './TodoList'

const appState = new AppState()

render(
  <AppContainer>
    <TodoList appState={appState} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./TodoList', () => {
    const NextApp = require('./TodoList').default

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
