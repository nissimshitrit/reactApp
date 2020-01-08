import React,{Component} from 'react';
//import logo from './logo.svg';

class TextSwap extends Component{
  constructor(props) {
      super(props);
      this.state = {text1 : '',text2: ''}
  }

  setValue1 = (e) =>{
      this.setState({text1:e.target.value})
  }
  setValue2 = (e) => {
      this.setState({text2:e.target.value})
  }
  swap = () =>{
      let temp1 = this.state.text1;
      let temp2 = this.state.text2;
      // this.setState({text1:temp2,text2:temp1});
      this.setState({text1:this.state.text2,text2:this.state.text1});
  }

  render() {
      return (
          <div>
          box1: <input  type="text" onChange={this.setValue1}/> <br/>
          box2: <input type="text" onChange={this.setValue2}/> <br/>
          <input value="swap" type="button" onClick={this.swap}/> <br/>
          Box 1: {this.state.text1} <br/>
          Box 2: {this.state.text2}
          </div>
      )
  }
}

export default TextSwap;
