import React from 'react';

const StudentRow = (props) => {

    const { name,course,grade } = props.student;

    return(
        <tr  className="z-depth-5 floating blue-grey lighten-3">
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
        </tr>
    );
}

export default StudentRow;