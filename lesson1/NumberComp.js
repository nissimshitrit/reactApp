import React,{Component} from 'react';
//import logo from './logo.svg';

class NumberComp extends Component{
  constructor(props) {
      super(props);
      this.state = {total : 0,number: 0}
  }

  getNumber = (e) => {
      if(e !== null && e.target !==null) {
          this.setState({number: Number(e.target.value)})
      }

  }
  sumValue = () => {
      this.setState((currentState) => {
         return {total: currentState.total + currentState.number};
      });
  }

  render() {
      return (
          <div>
          <input type="text" onChange={this.getNumber}/> <br/>
            Total:  {this.state.total}<br/>
              <input type="button" value="Add" onClick={this.sumValue}/>
          </div>
      )
  }
}

export default NumberComp;
