// Use function to create React component
// Component is a function that returns React elements

import React from "react";
import ReactDom from "react-dom";
import Header from "./Header"; // Do not need to specify .js
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
