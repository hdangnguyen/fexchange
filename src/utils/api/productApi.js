import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/productposts";

    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/productposts/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
