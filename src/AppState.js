import { observable } from 'mobx'

class AppState {
  @observable todos = []

  constructor() {
    this.todos.push({ text: 'Make dinner', completed: false },
                    { text: 'Do shopping', completed: false },
                    { text: 'Pet cat', completed: false })
  }

}

export default AppState
