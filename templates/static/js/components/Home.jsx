import React, { Component } from 'react';

var frstnmbr = 0;
var scndnmbr = 0;

export default class Home extends Component {
    render() {
       return (
         <div class='c2'>
            <div class='c1'>
              <h1 id='first_number'>
                {frstnmbr}
              </h1>
              <h1 id='aritchmatics'>
                &times
              </h1>
              <h1 id='second_number'>
                {scndnmbr}
              </h1>
            </div>

            <h1>
            =
            </h1>
            <input maxlength="3"></input>

        </div>
       )
    }
}
