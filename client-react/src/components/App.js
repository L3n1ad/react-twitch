import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams-routes/StreamCreate";
import StreamDelete from "./streams-routes/StreamDelete";
import StreamEdit from "./streams-routes/StreamEdit";
import StreamList from "./streams-routes/StreamList";
import StreamShow from "./streams-routes/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="ui container">
          {/* exact property makes sure that home page component will show only exactly on the home page url */}

          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// NOTES FOR REACT-ROUTER-DOM

// const PageOne = () => {
//   return (
//     <div>
//       {" "}
//       Page 1
//       {/* WRONG APPROACH - because it would refresh the page meaning all of states and props would be all gone and set back to that initial state */}
//       {/* <a href="/pagetwo"> Get me to page two</a> */}
//       {/* WRIGTH APPROACH */}
//       <Link to="/pagetwo"> Get me to page two</Link>
//     </div>
//   );
// };
