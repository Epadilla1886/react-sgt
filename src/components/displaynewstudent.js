import React, { Component } from 'react';
import {Link} from "react-router-dom";


class ViewStudent extends Component {
    render(){
        return(
            <div>
                <h1 className= "center z-depth-5 floating deep-orange pulse">Student Details</h1>
                    <div className="row">
                         <div className="col s12 left-align">
                             <Link className="btn indigo darken-1 z-depth-5 floating floating waves-effect waves-light" to="/">Back to SGT</Link>
                       </div>
                    </div>
            </div>
        );
    }
}

export default ViewStudent;