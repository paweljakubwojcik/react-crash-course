import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.complited ? 'line-through' : 'none'
        }
    }

    render() {

        const { tittle, id } = this.props.todo;
        return (
            <div className="TodoItem" style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {tittle}
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
