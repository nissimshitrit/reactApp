import React,{Component} from 'react';
//import logo from './logo.svg';
import './TextFilter.css';

class TextFilter2 extends Component{
  constructor(props) {
      super(props);
      this.state = {text : ''}
  }

  setValue1 = (e) =>{
      this.setState({text:e.target.value})
  }


  render() {
      let className ="styleBlue";
      if(this.state.text.length > 5){
          className ="styleRed";
      }

      return (
          <div>
          box1: <input  type="text" onChange={this.setValue1}/> <br/>
              <div className={className}>Box 1: {this.state.text}</div> <br/>
          </div>
      )
  }
}

export default TextFilter2;
