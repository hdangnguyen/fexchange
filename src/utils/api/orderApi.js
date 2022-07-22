import axiosClient from './axiosClient';

const orderApi = {
    rating: (orderId, feedback, rate) => {
        const url = '/orders/' + orderId;
        const order = {
            feedback: feedback,
            rate: rate,
        };
        return axiosClient.put(url, order, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }, //TODO: call rating api
};

export default orderApi;
