import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Todo from './Todo'

@observer
class TodoList extends Component {
  render() {
    const appState = this.props.appState
    return (
      <div>
        <ul>
          { appState.todos.map(
            (todo, idx) => <Todo todo={ todo } key={ idx } />
          ) }
        </ul>
        <DevTools />
      </div>
    )
  }
}

export default TodoList
