const userInfo = {
  name: "Stinky Weaselteats",
  age: 114
};

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //options: ["Thing 1", "Thing 2", "Thing 3", "Thing 5!"]
      options: []
    }
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.deleteOneOption = this.deleteOneOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.pickOption = this.pickOption.bind(this);
  }
  addOption(optionText) {
    if(!optionText) {
      return 'Please enter a valid option.';
    } else if (this.state.options.indexOf(optionText) > -1) {
      return 'Option already exists.';
    } 
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([optionText])
      };
    });
    console.log(optionText);
    
  }
  deleteAllOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  deleteOneOption(optionIndex){
    const newOptions = this.state.options;
    newOptions.splice(optionIndex, 1);
    this.setState((prevState) => {
      return {
        options: newOptions
      }
    });
  }
  pickOption(){
    let pick = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[pick])
  }
  render() {
    const subtitle = "Knock, knock. Who's there? FART!";
    return (
      <div>
        <Header title="Fart knocker." subtitle={subtitle}/>
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}.</h2>
    </div>
  );
}

/* class Header extends React.Component {
  render() {
    this.props
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}.</h2>
      </div>
    );
  }
} */

const Action = (props) => {
  return (
    <div>
    <button 
     onClick={props.pickOption} 
     disabled={!props.hasOptions}
    >
     What should I do?
    </button>
    </div>
  );
}
/*  class Action extends React.Component {
   constructor(props){
     super(props);
   }
   render() {
     return (
       <div>
       <button 
        onClick={this.props.pickOption} 
        disabled={!this.props.hasOptions}
       >
        What should I do?
       </button>
       </div>
     );
   }
 } */

 const Options = (props) => {
  return (
    <div>
      <p>Options here...</p>
      <button onClick={props.deleteAllOptions}>Remove All</button>
      <p>Options length: {props.options.length}</p>
      <ul>
        {
          props.options.map((option, index) => {
            return <Option key={ index } index={ index } option={option} deleteOneOption={props.deleteOneOption}/>;
          })
        }
      </ul>
    </div>
  );
 }

 /* class Options extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
     return (
       <div>
         <p>Options here...</p>
         <button onClick={this.props.deleteAllOptions}>Remove All</button>
         <p>Options length: {this.props.options.length}</p>
         <ul>
           {
             this.props.options.map((option, index) => {
               return <Option key={ index } index={ index } option={option} deleteOneOption={this.props.deleteOneOption}/>;
             })
           }
         </ul>
       </div>
     );
   }
 } */

 class RemoveOption extends React.Component {
   constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }
  handleRemoveOption(e) {
    //alert("remove it!");
    console.log(this.props.index);
    this.props.deleteOneOption(this.props.index);

  }
  render() {
    return (
      <button index={this.props.index} onClick={this.handleRemoveOption}>X</button>
    )
  }
 }


 const Option = (props) => {
  return (
    <div>
      <p>Option: {props.option} 
       
     <RemoveOption 
       index={props.index} 
       deleteOneOption={props.deleteOneOption} 
     />
      </p>
    </div>
  );
 }

 /* class Option extends React.Component {
   constructor(props) {
     super(props);
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
     );
   }
 } */

 class AddOption extends React.Component {
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
       
       e.target.elements.option.value = '';
       this.setState(() => {
        return {
          error: error
        }
       });
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
