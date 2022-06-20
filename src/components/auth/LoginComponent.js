import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import useEffect from "react";

const clientId =
  "565988690909-8ve03ft7hdobt3v74u2n7utergqd31cr.apps.googleusercontent.com";

function Login() {
  const onSuccess = (response) => {
    console.log("[Login Success] currentUser: ", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("[Login Failure] currentUser: ", response);
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={onSuccess}
        buttonText="Login"
        onFailure={onFailure}
        clientId={clientId}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
