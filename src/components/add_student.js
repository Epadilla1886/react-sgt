import React, {Component} from 'react';

    class AddStudent extends Component {
        state={
            name:'',
            course:'',
            grade:''
        }

        handleSubmit = (event) => {
            event.preventDefault();

            console.log('Form Submitted',this.state);
        }

        handleKeyPres = (event) => {
            console.log('Event Name:', event.target.name);
            console.log('Event Value:', event.target.value);

            switch(event.target.name){
                case 'name':
                    this.setState({
                        name: event.target.value
                    });
                    break;
                case 'course':
                    this.setState({
                        course: event.target.value
                    });
                    break;
                case 'grade':
                    this.setState({
                        grade: event.target.value
                    });
                    break;
            }
        }


    render(){
            const{name,course,grade} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <h4 className="center z-depth-5 floating blue-grey">Add Student</h4>
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPres} name="name" type="text" id="name" value={name}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPres} name="course" type="text" id="course" value={course}/>
                        <label htmlFor="course">Course</label>
                    </div>
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPres} name="grade" type="text" id="grade" value={grade}/>
                        <label htmlFor="grade">Grade</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button type="button" className="center z-depth-5 floating waves-effect waves-light btn red">Clear</button>
                    </div>
                    <div className="col s6 center">
                        <button className="center z-depth-5 floating waves-effect waves-light btn green">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddStudent;