import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  
    submitOption = (e) => {
      e.preventDefault();
      let option = e.target.elements.option.value.trim();
      const error = this.props.addOption(option);
      if(error) {
        this.setState(() => {
         return {
           error: error
         }
        });
        
      } else {
        e.target.elements.option.value = '';
        this.setState(() => ( { error: '' } ));
      }
      if(!error) {
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option__error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.submitOption}>
            <input className="add-option__input" type="text" name="option"></input>
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }