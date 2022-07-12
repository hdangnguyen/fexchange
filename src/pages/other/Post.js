import React, { Fragment } from 'react';
import { MetaTags } from 'react-meta-tags';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from './../../wrappers/breadcrumb/Breadcrumb';
const Post = (props) => {
    const { pathname } = props;
    return (
        <Fragment>
            <MetaTags>
                <title>FEX| Post product</title>
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>
                Home
            </BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Post
            </BreadcrumbsItem>
            <LayoutOne>
                <Breadcrumb />
                <div className="container pd-80 pt-100">
                    <div className="d-flex align-items-center justify-content-center mb-5">
                        <p className="h2">Create your product</p>
                    </div>
                </div>
                <div className="row">
                    <form className="container col-6 post-form">
                        <div className="row m-3">
                            <div className="col">
                                <label className="form-label">
                                    Product name
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="col-3">
                                <label className="form-label">Price</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="price"
                                />
                            </div>
                            <div className="col-3">
                                <label className="form-label">
                                    Goods status
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="goodsStatus"
                                />
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    rows="5"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default Post;
