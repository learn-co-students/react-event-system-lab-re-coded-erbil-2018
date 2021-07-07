import React from "react";

export default class Keypad extends React.Component 
{
  printMessage = ()=> console.log("Entering password...");
  
  render()
  {
    return (<div>
     <input onKeyUp={this.printMessage} type="password"/>
    </div>)
  }
}