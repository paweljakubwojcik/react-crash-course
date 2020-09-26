import React, { Component } from 'react'
import '../styles/AddTodo.css'

export default class AddTodo extends Component {
    render() {
        return (
            <form action="">
                <input
                    type="text"
                    name="tittle"
                    placeholder="Add new todo..." />
                <button
                    type="submit"
                    value="Add"
                    className="btn" >Add</button>
            </form>
        )
    }
}
