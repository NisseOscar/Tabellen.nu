import React, { Component } from 'react';

var frstnmbr = 10;
var scndnmbr = 10;
const nmbrs = [1,2,3,4,5,6,7,8,9,10];
const grey = "rgb(60, 60, 60,0.7)";
const green = "rgb(50, 250, 100)";

class TblBtn extends Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    this.bgColor = green

  }

  handleClick() {
    this.bgColor = (this.state.isToggleOn? grey : green);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.state.isToggleOn)
  }
  render() {
    return (
        <button
          className='tblBtn'
          onClick={this.handleClick}
          style={{backgroundColor:this.bgColor}}><h2>{this.props.nmbr}</h2></button>
    )
  }
};


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {values: };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.value == frstnmbr*scndnmbr){
      console.log("rätt")
    }
    else if(event.target.value.toString().length == (frstnmbr*scndnmbr).toString().length){
      console.log("fel")
    }
  }
  render() {
     return (
       <body>
         <div className='c2'>
           <div className='c1'>
             <h1>
               {frstnmbr}&times;{scndnmbr}
             </h1>
            </div>
           <h1>=</h1>
           <input onChange={this.handleChange} maxlength= "3" />
         </div>
         <div className="Btnrow">
          <TblBtn nmbr="1" />
          <TblBtn nmbr="2" />
          <TblBtn nmbr="3" />
          <TblBtn nmbr="4" />
          <TblBtn nmbr="5" />
        </div>
        <div className="Btnrow">
          <TblBtn nmbr="6" />
          <TblBtn nmbr="7" />
          <TblBtn nmbr="8" />
          <TblBtn nmbr="9" />
          <TblBtn nmbr="10" />
       </div>
     </body>
     )
  }
}

export default Home
