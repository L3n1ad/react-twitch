import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      {" "}
      Page 1
      {/* WRONG APPROACH - because it would refresh the page meaning all of states and props would be all gone and set back to that initial state */}
      {/* <a href="/pagetwo"> Get me to page two</a> */}
      <Link to="/pagetwo"> Get me to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      {" "}
      Page 2 <Link to="/"> Get me to page </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          {/* exact property makes sure that home page component will show only exactly on the home page url */}
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
