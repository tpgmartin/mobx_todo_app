import { observable } from 'mobx'

class AppState {
  @observable todos = []

  constructor() {
    this.todos.push({ id: 1, text: 'Make dinner', completed: false },
                    { id: 2, text: 'Do shopping', completed: false },
                    { id: 3, text: 'Pet cat', completed: false })
  }

}

export default AppState
