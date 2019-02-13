import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component} from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import Table from './table';
import { formatPostData } from '../helpers';


//needs to be changed from functional statement to class statement in order to pass info between siblings. change to class, add return, make div creation the return
class App extends Component {
    state = {
        students:[]
    }

    //lifecycle method within React, similar to document.ready in jQuery
    componentDidMount(){
        this.getStudentData();
    }

    addStudent = async (student) => {

        const  formattedStudent = formatPostData(student);

        await axios.post('/server/createstudent.php', formattedStudent);

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
