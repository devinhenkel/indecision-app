import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';

const userInfo = {
    name: "Stinky Weaselteats",
    age: 114
  };
  
class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        options: props.options
      }
      this.deleteAllOptions = this.deleteAllOptions.bind(this);
      this.deleteOneOption = this.deleteOneOption.bind(this);
      this.addOption = this.addOption.bind(this);
      this.pickOption = this.pickOption.bind(this);
    }
    componentDidMount(){
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({options}));
        }
      } catch (e) {
        console.log(e.error);
      }
    }
    componentDidUpdate(prevProps, prevState){
        //console.log(prevState.options.length + '-' + this.state.options.length);
      //if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data.');
      //}
      //console.log(prevState);
    }
    addOption(optionText) {
      if(!optionText) {
        return 'Please enter a valid option.';
      } else if (this.state.options.indexOf(optionText) > -1) {
        return 'Option already exists.';
      } 
      this.setState((prevState) => ( { options: prevState.options.concat([optionText]) } ));
      console.log(optionText);
      
    }
    deleteAllOptions(){
      this.setState(() => ( { options: [] } ));
    }
    deleteOneOption(optionIndex) {
      const newOptions = this.state.options;
      newOptions.splice(optionIndex, 1);
      this.setState((prevState) => ( { options: [].concat(newOptions) } ));
    }
    pickOption(){
      let pick = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[pick])
    }
    render() {
      const subtitle = "Knock, knock. Who's there? FART!";
      return (
        <div>
          <Header title="What up?" subtitle={subtitle}/>
          <User userinfo={userInfo} />
          <Action 
            hasOptions={this.state.options.length>0}
            pickOption = {this.pickOption}
          />
          <Options 
            options = {this.state.options}
            deleteAllOptions = {this.deleteAllOptions}
            deleteOneOption = {this.deleteOneOption}
          />
          <AddOption 
            addOption = {this.addOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };
  
  const Options = (props) => {
    return (
      <div>
        <button onClick={props.deleteAllOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to begin.</p>}
        <ul>
          {
            props.options.map((option, index) => {
              return (
                <Option 
                  key={ index } 
                  index={ index } 
                  option={option} 
                  deleteOneOption={props.deleteOneOption}
                />
              )
            })
          }
        </ul>
      </div>
    );
   }
   
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