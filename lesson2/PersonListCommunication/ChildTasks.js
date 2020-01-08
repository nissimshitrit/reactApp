import React,{Component} from 'react';

class ChildTasks extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>Title: {this.props.task.title}</div>
                <div>Completed: {this.props.task.completed}</div>
                <br/>
            </div>
        )
    }
}

export default ChildTasks;