import React, { Fragment, useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from './../../wrappers/breadcrumb/Breadcrumb';
import DateInput from '../../components/input/DatePicker';
import categoryApi from './../../utils/api/categoryApi';
import ImageUploading from 'react-images-upload';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
const ImageUploader = (props) => {
    const { maxNumber, images, onChange } = props;

    return (
        <div className="row">
            <ImageUploading
                className="container"
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    DragProps,
                }) => (
                    <div className="container">
                        {console.log(imageList)}
                        <Button
                            className={
                                'btn btn-' + isDragging ? 'success' : 'primary'
                            }
                        ></Button>
                        <Button className="btn btn-warning">
                            Remove all images
                        </Button>
                        {imageList.map((image, index) => (
                            <div className="row row-cols-4">
                                {console.log('rendered')}
                                {/* render image slider here */}
                                <image
                                    src={image['data_url']}
                                    alt=""
                                    width="100"
                                ></image>
                                <Button onClick={() => onImageUpdate(index)}>
                                    Update
                                </Button>
                                <Button onClick={() => onImageRemove(index)}>
                                    Delete
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};
const Post = (props) => {
    const { pathname } = props;
    const [categories, setCategories] = useState([]);
    const [categoriesDataShow, setCategoriesDataShow] = useState([]);
    const [selectedFile, setFile] = useState(null);
    const [images, setImages] = useState([]);
    const data = {
        id: new Date().getTime,
        name: 'Áo khoác bé xinh',
        price: 120000,
        boughDate: new Date().toDateString,
        img: '',
        goodsStatus: 23,
        description: 'Một chiếc áo bé xinh đẹp',
        status: 'Tốt',
        accountId: '12312312',
        categoryId: 'cate-1234',
        accountName: 'Đăng',
        categoryName: 'Quần áo',
        NumberOfExchangeDesires: 1,
        images: ['', ''],
        files: ['', ''],
    };
    const onChange = (imagesList, addUpdateIndex) => {
        console.log(imagesList, addUpdateIndex);
        setImages(imagesList);
    };
    useEffect(() => {
        const test = async () => {
            let tmpCategories = [];
            let tmpShowCategories = [];
            for (let i = 1; i < 8; i++) {
                const data = await categoryApi
                    .get(i)
                    .then((res) => res)
                    .catch((err) => err);
                tmpShowCategories.push({
                    value: data.id || 0,
                    label: data.category1 || 'other',
                });
                tmpCategories.push(data);
            }
            setCategories(tmpCategories);
            setCategoriesDataShow(tmpShowCategories);
        };
        test();
    }, []);
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
                    <form className="container col-sm-10 col-lg-8 col-xl-6 post-form">
                        <div className="row m-1 m-md-3">
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
                        <div className="row m-3 ">
                            <div className="col-3">
                                <label className="form-label">
                                    Bought date
                                </label>
                                <DateInput className="form-control"></DateInput>
                            </div>
                            <div className="col-3">
                                <label className="form-label">Status</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Category</label>
                                <Select
                                    className=""
                                    options={categoriesDataShow}
                                    components={{ IndicatorSeparator: null }}
                                ></Select>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-12">
                                <label className="form-label">Images</label>
                                <ImageUploader
                                    className="form-control"
                                    maxNumber={100}
                                    images={images}
                                    onChange={onChange}
                                ></ImageUploader>
                            </div>
                        </div>
                    </form>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default Post;
