import React from 'react';
import ReactDOM from 'react-dom';


const userInfo = {
    name: "Stinky Weaselteats",
    age: 114
  };
  
  IndecisionApp.defaultProps = {
    options: []
  };
  
  const jsx = (
    <div>
      <IndecisionApp />
    </div>
  );
  
  const User = (props) => {
    return (
      <div>
        <p>Name: {props.userinfo.name}</p>
        <p>Age: {props.userinfo.age}</p>
      </div>
    )
  }
  
  const approot = document.getElementById('app');
  ReactDOM.render(<IndecisionApp />, approot)
  
  //binding example
  const obj = {
    name: "Farty Marty",
    getName(){
      return this.name;
    }
  }
  
  const getName = obj.getName.bind(obj);
  //end example