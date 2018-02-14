

console.log('Dilly, dilly!');

//JSX - JavaScript XML

let user = {
  name: "D Diggity",
  age: 53,
  cityname: "Chicago",
  phrase: "Bite me, you loser."
};

let gapp = {
  headline: "Indecision!",
  subtitle: "Gotta get me some.",
  options: ["one", "two", "three"]
};

function getLocation(locstring){
  if (locstring){
    return <p>Location: {locstring}</p>;
  }
};

function listOptions(){
  return (
            <ul>
                {gapp.options.map(function(option, index){
                    return <li key={ index }>{option}</li>;
                  })}
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
  }
}

const template = (
  <div>
    <h1>{gapp.headline}</h1>
    {gapp.subtitle && <h3>{gapp.subtitle}</h3>}
    {getOptions()}
  </div>
);



const template2 = (
  <div>
    <h3>{user.name ? user.name : "Anonymous"}</h3>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.cityname)}
    {user.phrase && <p>Catchphrase: {user.phrase}</p>}
  </div>
);

const template3 = (
  <div></div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounter();
}
const subtractOne = () => {
  count--;
  renderCounter();
}
const resetOne = () => {
  count = 0;
  renderCounter();
}

var approot = document.getElementById("app");
var approot2 = document.getElementById("app2");
var approot3 = document.getElementById("app3");
const approotInteractive = document.getElementById("appinteractive");

//ReactDOM.render(template, approot);
//ReactDOM.render(template2, approot2);
//ReactDOM.render(template3, approot3);

const renderCounter = () => {
  const templateinteractive = (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={resetOne}>Reset</button>
    </div>
  );

  ReactDOM.render(templateinteractive, appinteractive);
}

renderCounter();
