// Use function to create React component
// Component is a function that returns React elements
function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src="Image/react-logo.png" className="header-img"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ol className="content-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2023 Brian development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.querySelector(".root"));
