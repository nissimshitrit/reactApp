import React,{Component} from 'react';
//import logo from './logo.svg';
import './TextFilter.css';

class TextCheckbox extends Component{
  constructor(props) {
      super(props);
      this.state = {red:false,green:false,blue:false}
  }

  checkRed = (e) =>{
      if(e.target.checked){
        this.setState({red:true})
      }
      else{
          this.setState({red:false})
      }


  }
    checkGreen = (e) =>{
        if(e.target.checked){
            this.setState({green:true})
        }
        else{
            this.setState({green:false})
        }


    }

    checkBlue = (e) =>{
        if(e.target.checked){
            this.setState({blue:true})
        }
        else{
            this.setState({blue:false})
        }
    }



    render() {

      let items = [];
      if(this.state.red){
          items.push(<div className="styleRed">RED</div>);
      }
      if(this.state.green){
            items.push(<div className="styleGreen">GREEN</div>);
      }
      if(this.state.blue){
          items.push(<div className="styleBlue">BLUE</div>)
      }

      return (
          <div>
          RED : <input  type="checkbox" onChange={this.checkRed}/> <br/>
          GREEN : <input  type="checkbox" onChange={this.checkGreen}/> <br/>
          BLUE : <input  type="checkbox" onChange={this.checkBlue}/> <br/>
          {items}
          </div>
      )
  }
}

export default TextCheckbox;
