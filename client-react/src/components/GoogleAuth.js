import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  // window. important to tell react that it is available on window scope
  useEffect(() => {
    //   add call back to make sure it will be called only once the data return from google
    //   we can use .then because .init returns a promise so we can do things once the library initalised itself
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_AUTH_KEY,
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth);
          auth.isSignedIn.listen(() => onAuthChange(auth));
        });
    });
  }, []);

  function onAuthChange(auth) {
    setIsSignedIn(auth.isSignedIn.get());
  }

  function renderAuthButton() {
    if (isSignedIn === null) {
      return <div>I don't know if we are signed in!</div>;
    } else if (isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in!</div>;
    }
  }

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
