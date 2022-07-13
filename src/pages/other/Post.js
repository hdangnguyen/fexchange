import React, { Fragment, useEffect, useState } from 'react';
import { MetaTags } from 'react-meta-tags';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from './../../wrappers/breadcrumb/Breadcrumb';
import DateInput from '../../components/input/DatePicker';
import categoryApi from './../../utils/api/categoryApi';
import ImageUploading from 'react-images-uploading';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import ImageSlider from './ImagesSlide/index';
const ImageUploader = (props) => {
    const { maxNumber, images, onChange } = props;

    return (
        <div className="row">
            <ImageUploading
                className="col-12"
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
                    dragProps,
                }) => (
                    <div className="container">
                        <div className="d-flex gap-3">
                            <Button
                                className={
                                    'col-2 btn btn-' +
                                    (isDragging ? 'success' : 'primary')
                                }
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Load
                            </Button>
                            <Button
                                className="col-3 btn btn-warning"
                                onClick={onImageRemoveAll}
                            >
                                Remove all images
                            </Button>
                        </div>
                        <div className="container p-5">
                            <ImageSlider images={imageList}></ImageSlider>
                        </div>
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
                    <div className="container col-sm-10 col-lg-8 col-xl-6 post-form">
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
                                    className="position-relative zindex-dropdown"
                                    options={categoriesDataShow}
                                    components={{
                                        IndicatorSeparator: null,
                                    }}
                                    styles={{
                                        menu: (base) => ({
                                            ...base,
                                            zIndex: 1000,
                                        }),
                                    }}
                                ></Select>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-12">
                                <label className="form-label">Images</label>
                                <ImageUploader
                                    maxNumber={23}
                                    images={images}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default Post;
