import React, { Component } from 'react';

const frstnmbr = 10;
const scndnmbr = 10;


export default class Home extends Component {
    render() {
       return (
         <div>
           <div class='c2'>
             <div class='c1'>
               <h1>
                 {frstnmbr}&times;{scndnmbr}
               </h1>
              </div>
             <h1>=</h1>
             <input maxlength="3"></input>
           </div>
           <button class='strtBtn'>
             <h2>Start</h2>
           </button>
          </div>
       )
    }
}

class startbutton extends Component {

}
