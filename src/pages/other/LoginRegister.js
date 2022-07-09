import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import config from "../../config.json";
import { withRouter, Redirect } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

class Login extends Component {
  onFailure = (error) => {
    alert(error);
  };

  googleResponse = (response) => {
    console.log(response);
    if (!response.tokenId) {
      console.error("Unable to get tokenId from Google", response);
      return;
    }

    const tokenBlob = new Blob(
      [JSON.stringify({ tokenId: response.tokenId }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",
      cache: "default",
    };
    fetch(config.GOOGLE_AUTH_CALLBACK_URL, options).then((r) => {
      r.json().then((user) => {
        const token = user.token;
        console.log(token);
        this.props.login(token);
      });
    });
  };

  render() {
    let content = !!this.props.auth.isAuthenticated ? (
      <div>
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      </div>
    ) : (
      <div>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Google Login"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );

    return (
      <Fragment>
        <MetaTags>
          <title>FExchange | Login</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>

        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login">
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="register">
                            <h4>Register</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form text-center">
                              <h4>Login with google</h4>
                              {content}
                            </div>
                          </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane> */}
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => {
      dispatch(login(token));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
