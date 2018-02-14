const initialState = {
  count: 0
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.doAddOne = this.doAddOne.bind(this);
    this.doSubtractOne = this.doSubtractOne.bind(this);
    this.doResetCounter = this.doResetCounter.bind(this);

    this.state = {
      count: props.count
    }
  }
  componentDidMount(){
    const counter = localStorage.getItem('counter');
    this.setState(() => ({count: parseInt(counter, 10)}));
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('counter', this.state.count);
    }
  }
  doAddOne(){
    //console.log("add");
    this.setState((currentState) => {
      return {
        count: currentState.count + 1
      };
    });
  }
  doSubtractOne(){
    //console.log("subtract");
    this.setState((currentState) => {
      return {
        count: currentState.count - 1
      };
    });
  }
  doResetCounter(){
    //console.log("reset");
    this.setState(initialState);
  }
  render() {
    return(
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.doAddOne}>+1</button>
        <button onClick={this.doSubtractOne}>-1</button>
        <button onClick={this.doResetCounter}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}
const approot = document.getElementById("app");
ReactDOM.render(<Counter />, approot);
