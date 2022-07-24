import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import "./admin.css";

const Admin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Admin</title>
        <meta name="description" content="Page for admin" />
      </MetaTags>
      <Fragment>
        <header>
          <nav
            id="sidebarMenu"
            class="collapse d-lg-block sidebar collapse bg-white"
          >
            <div class="position-sticky">

              {/* put a logo here */}
              
              <div class="list-group list-group-flush mx-3">
                <div></div>
                <a
                  href="/"
                  class="list-group-item list-group-item-action py-2 ripple active"
                >
                  <span>User Management</span>
                </a>
                <a
                  href="/"
                  class="list-group-item list-group-item-action py-2 ripple"
                >
                  <span>Product Management</span>
                </a>
                <div></div>
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    </Fragment>
  );
};

Admin.propTypes = {};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(Admin);
