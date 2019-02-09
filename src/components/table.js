import React, {Component} from 'react';
import StudentRow from './student_row';
import studentData from '../data/get_all_students';



class Table extends Component {
    state = {
        students:[]
    }

    //lifecycle method within React, similar to document.ready in jQuery
    componentDidMount(){
        this.getStudentData();
    }

    getStudentData(){
        //Call server to get student data

        this.setState({
            students: studentData
        });
    }


    render(){
        const studentRows = this.state.students.map((student)=>{
            return <StudentRow key={student.id} student={student}/>
        });
        return (
            <table>
                <thead>
                    <tr className="blue-grey">
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                {studentRows}
                </tbody>
            </table>
        )
    }
}

export default Table;