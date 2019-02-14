import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import AddStudent from './add_student';
import Table from './table';
import ViewStudent from './displaynewstudent';

//needs to be changed from functional statement to class statement in order to pass info between siblings. change to class, add return, make div creation the return
class App extends Component {


    render(){
        return (
            <div className="container">

                <Route exact path="/" component={Table}/>
                <Route path="/add-student" component={AddStudent}/>
                <Route path="/student/:id" component={ViewStudent}/>
            </div>
        );
    }
}

export default App;
