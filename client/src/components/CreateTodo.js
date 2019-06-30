import React, { Component } from "react";
import axios from "axios";

class CreateTodo extends Component {

    constructor(props){
        super(props);

        this.handleTodoDescription = this.handleTodoDescription.bind(this);
        this.handleTodoResponsible = this.handleTodoResponsible.bind(this);
        this.handleTodoPriority = this.handleTodoPriority.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            todoDescription: "",
            todoResponsible: "",
            todoPriority: "",
            todoCompleted: false
        }
    }
    
    // state = {
    //     todoDescription: "",
    //     todoResponsible: "",
    //     todoPriority: "",
    //     todoCompleted: false
    // }

    handleTodoDescription(event){
        this.setState({
            todoDescription: event.target.value
        });
    }

    handleTodoResponsible(event){
        this.setState({
            todoResponsible: event.target.value
        });
    }

    handleTodoPriority(event){
        this.setState({
            todoPriority: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Description: ${this.state.todoDescription}`);
        console.log(`Responsible: ${this.state.todoResponsible}`);
        console.log(`Priority: ${this.state.todoPriority}`);
        console.log(`Completed: ${this.state.todoCompleted}`);

        const newTodo = {
            description: this.state.todoDescription,
            responsible: this.state.todoResponsible,
            priority: this.state.todoPriority,
            completed: this.state.todoCompleted
        }

        axios.post("http://localhost:3001/api/create", newTodo)
        .then(res => {
            console.log(res.data);
        });

        this.setState({
            todoDescription: "",
            todoResponsible: "",
            todoPriority: "",
            todoCompleted: false
        });
    }

    render () {
        return (
            <div>
                <h2>Create New Todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text" 
                            className="descriptionInput" 
                            value={this.state.handleTodoDescription}
                            onChange={this.handleTodoDescription} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                            type="text" 
                            className="responsibleInput" 
                            value={this.state.handleTodoResponsible}
                            onChange={this.handleTodoResponsible} 
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input 
                                className="priorityCheck"
                                id="priorityLow"
                                type="radio"
                                name="priorityCheck"
                                value="Low"
                                checked={this.state.todoPriority==="Low"}
                                onChange={this.handleTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check">
                            <input 
                                className="priorityCheck"
                                id="priorityMedium"
                                type="radio"
                                name="priorityCheck"
                                value="Medium"
                                checked={this.state.todoPriority==="Medium"}
                                onChange={this.handleTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check">
                            <input 
                                className="priorityCheck"
                                id="priorityHigh"
                                type="radio"
                                name="priorityCheck"
                                value="High"
                                checked={this.state.todoPriority==="High"}
                                onChange={this.handleTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Create Todo" className="btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTodo;