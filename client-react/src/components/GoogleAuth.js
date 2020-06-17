import React, { useEffect } from "react";

const GoogleAuth = () => {
  // window. important to tell react that it is available on window scope
  useEffect(() => {
    //   add call back to make sure it will be called only once the data return from google
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_KEY,
        scope: "email",
      });
    });
  }, []);
  return <div>GOOGLE AUTH</div>;
};

export default GoogleAuth;
