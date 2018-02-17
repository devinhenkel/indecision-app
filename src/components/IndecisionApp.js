import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
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