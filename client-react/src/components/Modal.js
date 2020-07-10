import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

// creating a sibling div in index html to #root and use that for displaying the modal
const Modal = (props) => {
  return ReactDOM.createPortal(
    // HANDLE MODAL CLOSE IF USER CLICKS OUT OF IT
    //   in order to make sure the history.push works only out of the popup we need to
    // define onClick on the child element to it won't boil up to the parent element to find
    //  an onClick USE e.stopPropagation()
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="conent">
          Are you sure you want to delet this stream?
        </div>
        <div className="actions">
          <button className="ui button">Cancel</button>
          <button className="ui primary button">Delete</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
