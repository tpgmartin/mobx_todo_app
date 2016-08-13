import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.appState.todos.map(function (todo) {
              return <div>{todo.text}</div>
            })
          }
        </ul>
        <DevTools />
      </div>
    );
  }
};

export default App
