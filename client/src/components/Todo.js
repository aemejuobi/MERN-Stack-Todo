import React from "react";
import { Link } from "react-router-dom";

const Todo = (props) => {
    return(
        <div>
            <tr>
                <td className={props.todo.complete ? 'completed' : ''}>{props.todo.description}</td>
                <td className={props.todo.complete ? 'completed' : ''}>{props.todo.responsible}</td>
                <td className={props.todo.complete ? 'completed' : ''}>{props.todo.priority}</td>
                <td>
                    <Link to={"/edit/" + props.todo._id}>Edit</Link>
                </td>
            </tr>
        </div>
    );
}

export default Todo;