import React, { Component } from 'react';

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
          style={{backgroundColor:this.bgColor}}><h2>{this.props.nmbr}</h2>
        </button>
    )
  }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function colorphase(element, property,col, duration) {
      var interval = 1;
      var steps = 20;
      var dt= 1.0/steps;
      var t = 0.0;
      var theInterval = setInterval(function(){
        if (u >= 1.0){ clearInterval(theInterval) }
        var r = parseInt(lerp(255, col.r, t));
        var g = parseInt(lerp(255, col.g, t));
        var b = parseInt(lerp(255, col.b, dt));
        var colorname = 'rgb('+r+','+g+','+b+')';
        document.body.style.color = colorname;
        t += dt;
      }, 1);
    };


class Home extends Component {
  constructor(props) {
    super(props);
    this.nmbrs = [];
    var i = 0;
    var j = 0;
    for (i=1;i<=10;i++){
      for (j=1;j<=10;j++){
        this.nmbrs.push([i,j])
      }
    }
    shuffle(this.nmbrs)
    this.handleChange = this.handleChange.bind(this);
    this.index = 0;
    this.state = {frstnmbr:this.nmbrs[this.index][0],
                  scndnmbr:this.nmbrs[this.index][1],
                  inputvle: ""
                };
  }

  async whitePhase(col){
        var dt= 1.0/40;
        var t = 0.0;
        var theInterval = setInterval(function(){
          if (t >= 1.0){ clearInterval(theInterval) }
          var a = -2*t*(t-1);
          var tmpClr = 'rgb('+col.r+','+col.g+','+col.b+','+a+')';
          document.body.style.backgroundColor  = tmpClr;
          t += dt;
        }, 25);
      }

  newNumbers(){
    this.setState({
      frstnmbr: 1+Math.floor(Math.random() * 10),
      scndnmbr: 1+Math.floor(Math.random() * 10),
      // inputvle:
    });
  }

  handleChange(event) {
    var input = document.getElementById("answer");
    if(event.target.value == this.state.frstnmbr*this.state.scndnmbr){
      console.log("rätt")
      this.newNumbers();
      this.whitePhase({r:0,g:255,b:0});
    }
    else if(event.target.value.toString().length == (this.state.frstnmbr*this.state.scndnmbr).toString().length){
      console.log("fel")
      this.newNumbers();
      this.whitePhase({r:255,g:0,b:0})
    }
  }
  render() {
     return (
       <div id="main">
         <div className='c2'>
           <div className='c1'>
             <h1>
               {this.state.frstnmbr}&times;{this.state.scndnmbr}
             </h1>
            </div>
           <h1>=</h1>
           <input onChange={this.handleChange} maxLength="3" id='answer'/>
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
     </div>
     )
  }
}

export default Home
