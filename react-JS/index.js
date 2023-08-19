// JSX
const element = // 一次只能回傳一個parent
  (
    <nav>
      <h1>React!</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p className="header">This is a paragraph</p>
    </nav>
  );
console.log(element); // We get a JS object

ReactDOM.render(element, document.querySelector(".root"));
