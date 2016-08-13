import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Todo extends Component {
  render() {
    
    const todo = this.props.todo;
    return (
      <li>
        <input type='checkbox' checked={ todo.completed } onChange={ this.onToggleCompleted } />
        { todo.text }
      </li>
    )
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

}

export default Todo