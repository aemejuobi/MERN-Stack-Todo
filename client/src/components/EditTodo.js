import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {

    state = {
        description: "",
        responsible: "",
        priority: "",
        completed: false
    };

    componentDidMount(){
        axios.get("https://http://localhost:3001/" + this.props.match.params.id).then(res => {
            this.setState({
                description: res.data.description,
                responsible: res.data.responsible,
                priority: res.data.priority,
                completed: res.data.completed
            });
        }).catch(err => {
            if(err){
                console.log(err);
            }
        });
    }
    
    render () {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.submit}>
                    
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleResponsibleChange}
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

                    <div className="form-check">
                        <input 
                            type="checkbox"
                            classname="input-check"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            onChange={this.handleTodoCompleted}
                            checked={this.state.completed}
                            value={this.state.completed}
                        />
                        <label 
                            className="form-check-label"
                            htmlFor="completedCheckBox">completed
                        </label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}

export default EditTodo;