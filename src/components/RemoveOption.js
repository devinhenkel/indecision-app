import React from 'react';

export default class RemoveOption extends React.Component {
    constructor(props) {
     super(props);
     // This binding is necessary to make `this` work in the callback
     this.handleRemoveOption = this.handleRemoveOption.bind(this);
   }
   handleRemoveOption(e) {
     console.log(this.props.index);
     this.props.deleteOneOption(this.props.index);
   }
   render() {
     return (
       <button 
        index={this.props.index} 
        onClick={this.handleRemoveOption}
        className="button button--link"
       >
        remove
       </button>
     )
   }
  } 