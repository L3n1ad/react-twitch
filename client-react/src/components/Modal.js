import React from "react";
import ReactDOM from "react-dom";

// creating a sibling div in index html to #root and use that for displaying the modal
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">MODAL COMPONENT</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
