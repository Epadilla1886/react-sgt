import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { formatPostData } from '../helpers';


class ViewStudent extends Component {
    state = {
        student:{

        }
    }

    async componentDidMount(){
        //make a check to make sure correct data is validated. Example, this prop, find the match parameter which is id
        // console.log('Student ID:', this.props.match.params.id);

        const studentId = formatPostData({
            id: this.props.match.params.id
        });

        const studentData = await axios.post('/server/getstudentdetails.php', studentId);

        console.log('Student Data:', studentData);

        this.setState({
            student: studentData.data.data
        });
    }

    render(){
        const {name,course,grade,instructor,notes} = this.state.student;

        return(
            <div>
                <h1 className= "center z-depth-5 floating deep-orange pulse">Student Details</h1>

                    <div className="row">
                         <div className="col s12 left-align">
                             <Link className="btn indigo darken-1 z-depth-5 floating floating waves-effect waves-light" to="/">Back to SGT</Link>
                       </div>
                    </div>

                <h1 className="center z-depth-5 floating purple darken-4">{name}</h1>
                <h5 className="blue-grey lighten-3">{course}</h5>
                <h5 className="blue-grey lighten-3">{grade}</h5>
                <h5 className="blue-grey lighten-3">{instructor}</h5>
                <h5 className="blue-grey lighten-3">{notes}</h5>
            </div>
        );
    }
}

export default ViewStudent;