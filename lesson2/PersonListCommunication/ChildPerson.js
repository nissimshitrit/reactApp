import React,{Component} from 'react';
import ChildTasks from "./ChildTasks";

class ChildPerson extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        var tasks = this.props.person.tasks.map((item,index) => {
            return <ChildTasks task={item} key={index}></ChildTasks>
        });

        return (
            <div>
                <h1>{this.props.person.name}</h1>
                <h2>Tasks:</h2>
                {tasks}
            </div>
        )
    }
}

export default ChildPerson;