import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Todo from "./Todo";

class TodoList extends Component {
    state = {
        todos: []
    }

    componentDidMount(){
        axios.get("http://localhost:3001/api/get").then(res => {
            this.setState({
                todos: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    todoList(){
        return this.state.todos.map((currentTodo, i) => {
            return <Todo 
                todo={currentTodo} 
                key={i}
            />
        })
    }

    render () {
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;