import React,{Component} from 'react';
import ChildPerson from "./ChildPerson";

class PersonList extends Component{
  constructor(props) {
      super(props);
      this.state = {persons:[
          {name:'Dana',tasks:[{title:'Task1',completed:'true'},{title:'Task2',completed:'false'}]},
              {name:'Ron',tasks:[{title:'Task3',completed:'false'},{title:'Task4',completed:'true'}]},
              {name:'Dov',tasks:[{title:'Task5',completed:'true'}]}
              ]}
  }
    render() {

      var persons = this.state.persons.map((item,index)=>{
          return <div><ChildPerson key={index} person={item}></ChildPerson></div>
      });

      return (
          <div>
          <h1>Person List</h1>
            {persons}
          </div>
      )
  }
}
export default PersonList;
