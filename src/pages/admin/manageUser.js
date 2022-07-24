import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";

const ManageUser = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Admin</title>
        <meta name="description" content="Page for admin" />
      </MetaTags>
      <Fragment>
        <div className="admin-page">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Number of posts</th>
                <th scope="col">Number of orders</th>
                <th scope="col">Number of notifications</th>
                <th scope="col">Status</th>
                <th scope="col">Ban</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div className="button" role="button">Ban user</div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData.products,
  };
};

export default connect(mapStateToProps)(ManageUser);
