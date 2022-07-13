import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/productposts';

        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/productposts/${id}`;
        return axiosClient.get(url);
    },
    post: (product) => {
        const url = '/productposts';
        return axiosClient.post(url, product, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
        });
    },
};

export default productApi;
