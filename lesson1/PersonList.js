import React,{Component} from 'react';
//import logo from './logo.svg';
import './TextFilter.css';

class PersonList extends Component{
  constructor(props) {
      super(props);
      this.state = {persons:[{name:'Dana',age:23,city:'Haifa'},{name:'Ron',age:22,city:'Tel Aviv'},{name:'Dov',age:31,city:'Ashdod'}]}
  }
    render() {

      let items = this.state.persons.map((item,index) =>
      {
          return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
      });

      return (
          <table>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
              </tr>
              {items}
          </table>
      )
  }
}
export default PersonList;
