import React from 'react';
import RemoveOption from './RemoveOption';

export default class Option extends React.Component {
    constructor(props){
      super(props);
    } 
    componentWillUnmount(){
      console.log('option removed :'+this.props.option);
    }
    render() {
      return (
        <div>
          <p>Option: {this.props.option} 
          
        <RemoveOption 
          index={this.props.index} 
          deleteOneOption={this.props.deleteOneOption} 
        />
          </p>
        </div>
      )
    }
   }