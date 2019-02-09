import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import AddStudent from './add_student';
import Table from './table';



const App = () => (
    <div>
        <h1 className="center z-depth-5 floating deep-orange pulse">Student Grade Table</h1>
        <div className="row">
            <div className="col s12 m8">
                <Table/>
            </div>
            <div className="col s12 m4">
                <AddStudent/>
            </div>
        </div>
    </div>
);

export default App;
