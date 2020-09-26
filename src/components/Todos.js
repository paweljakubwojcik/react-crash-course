import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {

    markComplete = () => {

    }

    render() {
        return this.props.todos.map((todo) =>
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                delete={this.props.delete}></TodoItem>
        )
    }
}

// validating propTypes #goodpractise
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;