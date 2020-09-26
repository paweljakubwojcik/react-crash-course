import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/TodoItem.css';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.complited ? 'line-through' : 'none'
        }
    }

    render() {

        const { tittle, id } = this.props.todo;
        return (
            <div className="TodoItem" >

                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <p style={this.getStyle()}>{tittle}</p>
                <button onClick={this.props.delete.bind(this, id)}>x</button>

            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
