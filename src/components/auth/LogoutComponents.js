import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "565988690909-8ve03ft7hdobt3v74u2n7utergqd31cr.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (response) => {
    alert("Logout made successfully");
  };

  return (
    <div>
      <GoogleLogout
        onLogoutSuccess={onSuccess}
        clientId={clientId}
        buttonText="Logout"
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
export default Logout;
