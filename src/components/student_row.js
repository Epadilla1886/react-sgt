import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const StudentRow = (props) => {

    const { name,course,grade, id } = props.student;

    return(
        <tr  className="z-depth-5 floating blue-grey lighten-3">
            <td>
                <Link to={`/student/${id}`}>{name}</Link>
            </td>
            <td>{course}</td>
            <td>{grade}</td>
            <td><button onClick={()=> {props.delete(id)}} className="floating waves-effect waves-light btn red">Delete</button></td>
        </tr>
    );
}

export default StudentRow;