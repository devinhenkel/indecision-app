import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.submitOption = this.submitOption.bind(this);
      this.state = {
        error: undefined
      }
    }
    submitOption(e) {
      e.preventDefault();
      let option = e.target.elements.option.value.trim();
      const error = this.props.addOption(option);
      if(option) {
        
        
        this.setState(() => {
         return {
           error: error
         }
        });
        if(!error) {
         e.target.elements.option.value = '';
        }
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.submitOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }