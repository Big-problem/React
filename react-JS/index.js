// const element = (
// <div>
//   <img src="Image/react-logo.png" width="40px"></img>
//   <h1>Fun facts about React</h1>
//   <ul>
//     <li>Was first released in 2013</li>
//     <li>Was originally created by Jordan Walke</li>
//     <li>Has well over 100K stars on Github</li>
//     <li>Is maintained by Facebook</li>
//     <li>Power thousands of enterprise apps, including mobile apps</li>
//   </ul>
// </div>
// );

// ReactDOM.render(element, document.querySelector(".root"));

// Use function to create React component
function ReactComponent() {
  return (
    <div>
      <img src="Image/react-logo.png" width="40px"></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<ReactComponent />, document.querySelector(".root"));
