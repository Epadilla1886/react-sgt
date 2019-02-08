
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import React from 'react';
import Table from './table';


const App = () => (
    <div>
        <h1 className="center z-depth-5 floating deep-orange pulse">SGT</h1>

        <Table/>
    </div>
);

export default App;
