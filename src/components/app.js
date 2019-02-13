import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component} from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import Table from './table';
import studentData from "../data/get_all_students";
import { randomString } from '../helpers';


//needs to be changed from functional statement to class statement in order to pass info between siblings. change to class, add return, make div creation the return
class App extends Component {
    state = {
        students:[]
    }

    //lifecycle method within React, similar to document.ready in jQuery
    componentDidMount(){
        this.getStudentData();
    }

    addStudent = (student) => {

        student.id = randomString();

        this.setState ({
           students: [...this.state.students, student]
        });
    }

    async getStudentData() {
//Call server to get student data

       const resp =  await axios.get('http://localhost/server/getstudentlist.php');

       console.log('Resp:',resp);

       this.setState ({
            students: resp.data.data
        });
    }


        // axios.get('http://localhost/server/getstudentlist.php').then((response) => {
        //     console.log('Server Response:', response.data.data);
        //
        //     this.setState({
        //         students: response.data.data
        //     });
        // });


    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student)=>{
            return student.id === id;
        });

        if(indexToDelete >= 0){
            const tempStudents = this.state.students.slice();

            tempStudents.splice(indexToDelete, 1);

            this.setState({
                students: tempStudents
            });
        }
    }

    render(){
        return (
            <div>
                <h1 className="center z-depth-5 floating deep-orange pulse">Student Grade Table</h1>

                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
