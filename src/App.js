import React from 'react';
import './App.css';

import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: "to jest pierwsza pozycja w todoliście",
        complited: false
      },
      {
        id: 2,
        tittle: "to jest druga pozycja w todoliście",
        complited: false
      },
      {
        id: 3,
        tittle: "to jest trzecia pozycja w todoliście",
        complited: false
      }
    ]
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          todo.complited = !todo.complited
        return todo;
      })
    })
  }

  // deleting todo
  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
      </div>
    );
  }
}

export default App;
