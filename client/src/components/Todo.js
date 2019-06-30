import React from "react";
import { Link } from "react-router-dom";

const Todo = (props) => {
    return(
        <div>
            <tr>
                <td>{props.todo.description}</td>
                <td>{props.todo.responsible}</td>
                <td>{props.todo.priority}</td>
                <td>
                    <Link to={"/edit/" + props.todo._id}>Edit</Link>
                </td>
            </tr>
        </div>
    );
}

export default Todo;