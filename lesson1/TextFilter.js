import React,{Component} from 'react';
//import logo from './logo.svg';
import './TextFilter.css';

class TextFilter extends Component{
  constructor(props) {
      super(props);
      this.state = {text : ''}
  }

  setValue(e){
      this.setState({text:e.target.value})
  }


  render() {
      /*let className = "styleRed";
      if(this.state.text.length > 5){
          className = "styleBlue";
      }*/
      return (
          <div>
          box1: <input type="text" onChange={this.setValue}/> <br/>
          <div >Box 1: {this.state.text} </div>
          </div>
      )
  }
}

export default TextFilter;
