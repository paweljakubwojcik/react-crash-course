import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

//components
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About';

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

  addTodo = (tittle) => {
    //copy the array
    const todos = this.state.todos.map(i => i)
    const newTodo = {
      id: (todos.pop().id + 1),
      tittle,
      complited: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
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
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' render={props => (
            <React.Fragment>
              <div className="container">
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
              </div>
            </React.Fragment>
          )} />

          <Route path='/about' component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
