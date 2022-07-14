import jwt from 'jsonwebtoken';
import axiosClient from './../utils/api/axiosClient';
import axios from 'axios';
import productApi from './../utils/api/productApi';

export async function UserIsValid(token) {
  let bodyFormData = new FormData();
  bodyFormData.append("tokenId", token);
  const responseToken = await axios({
    method: "POST",
    url: process.env.REACT_APP_API_URL + "/login/google",
    headers: {
      "Content-Type": "application/json",
    },
    data: { tokenId: token },
  })
    .then((res) => {
      return res.data.token;
      // console.log(res.data)
    })
        .then((res) => {
            console.log(res);
            return res.data.token;
            // console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    bodyFormData.append('id', null);
    await productApi.post(bodyFormData).then((res) => {
        console.log(res);
    });
    var decodedToken = jwt.decode(responseToken);
    var dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) return true;
    else return false;
}
