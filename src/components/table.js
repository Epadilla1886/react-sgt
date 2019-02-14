import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import StudentRow from './student_row';
import axios from 'axios';
import {formatPostData} from "../helpers";

class Table extends Component {
    state = {
        students:[]
    }

    //lifecycle method within React, similar to document.ready in jQuery
    componentDidMount(){
        this.getStudentData();
    }

    async getStudentData() {
//Call server to get student data

        const resp = await axios.get('/server/getstudentlist.php');

        console.log('Get List Resp:', resp);


        //    if(resp.data.success) {
        //        this.setState({
        //            students: resp.data.data
        //        });
        //    } else {
        //        this.setState({
        //            student:[]
        //        });
        //    }
        // }

        // short hand or statement of above code
        this.setState({
            students: resp.data.data || []
        });
    }
    // axios.get('http://localhost/server/getstudentlist.php').then((response) => {
    //     console.log('Server Response:', response.data.data);
    //
    //     this.setState({
    //         students: response.data.data
    //     });
    // });


    deleteStudent = async (id) => {
        const formattedId = formatPostData({id: id});

        await axios.post('/server/deletestudent.php', formattedId);

        this.getStudentData();
    }

            render(){
                const {students} =  this.state;
                let studentRows = [];

                if(Array.isArray(students) && students.length){
                    studentRows = students.map((student)=>{
                        return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
                    });
                }else{
                    studentRows.push(
                        <tr key='anything'>
                            <td colSpan='4'>
                                <h4 className="center red-text">No Student Data Available</h4>
                            </td>
                        </tr>
                    )
                }

                return (
                      <div>
                          <h1 className="center z-depth-5 floating deep-orange pulse">Student Grade Table</h1>

                          <div className="row">
                              <div className="col s12 right-align">
                                  <Link className="btn indigo darken-1 z-depth-5 floating floating waves-effect waves-light pulse" to="/add-student">Add Student</Link>
                              </div>
                          </div>


                          <table>
                              <thead>
                              <tr className="blue-grey">
                                  <th>Name</th>
                                  <th>Course</th>
                                  <th>Grade</th>
                                  <th>Actions</th>
                              </tr>
                              </thead>
                              <tbody>
                              {studentRows}
                              </tbody>
                          </table>
                      </div>
                        );
                    }
                }
export default Table;