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
          <div className="option">
            <p className="option__text">{this.props.count}: {this.props.option}</p>
            
            <RemoveOption 
              index={this.props.index} 
              deleteOneOption={this.props.deleteOneOption} 
            />
          </div>
        </div>
      )
    }
   }