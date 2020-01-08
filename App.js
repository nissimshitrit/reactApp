import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from "./lesson2/PersonListCommunication/Parent";

class App extends Component{
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
          <Parent />
          </div>
      )
  }
}

export default App;
