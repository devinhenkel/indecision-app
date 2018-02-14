const appheader = document.getElementById("app");
const appcontent = document.getElementById("app2");
let showDetails = false;

const templateHeader = (
  <div>
    <h3>Visible!</h3>
  </div>
)

ReactDOM.render(templateHeader, appheader);

const toggleDetails = (e) => {
  showDetails = !showDetails;
  renderContent();
}

let templateContent = "";
const renderContent = () => {
  if (showDetails){
    templateContent = (
      <div>
        <button onClick={toggleDetails}>Hide Details</button>
        <p>These are not the details you seek...</p>
      </div>
    )
  } else {
    templateContent = (
      <div>
        <button onClick={toggleDetails}>Show Details</button>
      </div>
    )
  }

  ReactDOM.render(templateContent, appcontent);
}

renderContent();
