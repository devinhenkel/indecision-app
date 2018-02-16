

console.log('Dilly, dilly!');

//JSX - JavaScript XML
const numbers = [1,2,3,4,5,6,7,8,9];

let user = {
  name: "D Diggity",
  age: 53,
  cityname: "Chicago",
  phrase: "Bite me, you loser."
};

let gapp = {
  headline: "Indecision!",
  subtitle: "Gotta get me some.",
  options: []
};

function listOptions(){
  return (
            <ul>
                {
                  gapp.options.map((option, index) => <li key={ index }>{option}</li>)
                }
            </ul>
        )
}

function getOptions(){
  if (gapp.options.length > 0){
    return <div>
      <p>Here are your options</p>
      <ul>
      {listOptions()}
      </ul>
    </div>
  } else {
    return <div>
      <p>No options.</p>
    </div>
  }
}
const addOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    gapp.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const clearOptions = (e) => {
  e.preventDefault();
  gapp.options = [];
  renderApp();
};

const makeDecision = (e) => {
  let randomNum = Math.floor(Math.random() * gapp.options.length);
  const myOption = gapp.options[randomNum];
  alert(myOption);
}

var approot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{gapp.headline}</h1>
      {gapp.subtitle && <h3>{gapp.subtitle}</h3>}
      <button disabled = {gapp.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Remove All</button>
      <p>{gapp.options.length}</p>
      {getOptions()}
      <form onSubmit={addOption}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        {
          numbers.map(function(number, index){
            return <p key={index}>{number}</p>;
          })
        }
      </form>
    </div>
  );

  ReactDOM.render(template, approot);
}

renderApp();
