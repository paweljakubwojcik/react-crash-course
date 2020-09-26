import React, { Component } from 'react'
import '../styles/AddTodo.css'

export default class AddTodo extends Component {

    state = {
        tittle: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.tittle)
        this.setState({ tittle: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="tittle"
                    placeholder="Add new todo..."
                    value={this.state.tittle}
                    onChange={this.onChange} />
                <button
                    type="submit"
                    value="Add"
                    className="btn" >Add</button>
            </form>
        )
    }
}
