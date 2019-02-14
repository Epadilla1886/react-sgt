import React, {Component} from 'react';
import {formatPostData} from "../helpers";
import {Link} from 'react-router-dom';
import axios from "axios";

    class AddStudent extends Component {
        state={
            name:'',
            course:'',
            grade:'',
            instructor:'',
            notes:''
        }

        handleSubmit = async (event) => {
            event.preventDefault();
            const  formattedStudent = formatPostData(this.state);
            await axios.post('/server/createstudent.php', formattedStudent);
            this.props.history.push('/');
        }

        resetForm = () => {
            this.setState ({
                name:'',
                course:'',
                grade:'',
                instructor:'',
                notes:''
            });
        }

        handleKeyPres = (event) => {
            //Long way (switch statement)
            // switch(event.target.name){
            //     case 'name':
            //         this.setState({
            //             name: event.target.value
            //         });
            //         break;
            //     case 'course':
            //         this.setState({
            //             course: event.target.value
            //         });
            //         break;
            //     case 'grade':
            //         this.setState({
            //             grade: event.target.value
            //         });
            //         break;
            // }


            this.setState({
                [event.target.name]: event.target.value
            });
        }


    render(){
            const{name,course,grade, instructor, notes} = this.state;
        return(
            <div>
                <h4 className="center z-depth-5 floating blue-grey">Add Student</h4>
               <div className="row">
                   <div className="col s12 left-align">
                       <Link className="btn indigo darken-1 z-depth-5 floating floating waves-effect waves-light" to="/">Back to SGT</Link>
                   </div>
               </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input autoComplete="off" onChange={this.handleKeyPres} name="name" type="text" id="name" value={name}/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col input-field s10 offset-s1">
                            <input autoComplete="off" onChange={this.handleKeyPres} name="course" type="text" id="course" value={course}/>
                            <label htmlFor="course">Course</label>
                        </div>
                        <div className="col input-field s10 offset-s1">
                            <input autoComplete="off" onChange={this.handleKeyPres} name="grade" type="number" id="grade" value={grade}/>
                            <label htmlFor="grade">Grade</label>
                        </div>
                        <div className="col input-field s10 offset-s1">
                            <input autoComplete="off" onChange={this.handleKeyPres} name="instructor" type="text" id="instructor" value={instructor}/>
                            <label htmlFor="instructor">Instructor</label>
                        </div>
                        <div className="col input-field s10 offset-s1">
                            <input autoComplete="off" onChange={this.handleKeyPres} name="notes" type="text" id="notes" value={notes}/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.resetForm} type="button" className="center z-depth-5 floating waves-effect waves-light btn red">Clear</button>
                        </div>
                        <div className="col s6 center">
                            <button className="center z-depth-5 floating waves-effect waves-light btn green">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddStudent;