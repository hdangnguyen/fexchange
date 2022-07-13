import jwt from 'jsonwebtoken';
import axiosClient from './../utils/api/axiosClient';
import axios from 'axios';

export async function UserIsValid(token) {
    var decodedToken = jwt.decode(token);
    console.log(decodedToken);
    axiosClient
        .post(
            '/api/login/google',
            { tokenId: token },
            {
                data: {
                    tokenId: token,
                },
            }
        )
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    let bodyFormData = new FormData();
    bodyFormData.append('tokenId', token);
    const responseToken = await axios({
        method: 'POST',
        url: process.env.REACT_APP_API_URL + '/api/login/google',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: bodyFormData,
    })
        .then((res) => {
            return res.data.token;
            // console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });

    var decodedToken = jwt.decode(responseToken);
    var dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) return true;
    else return false;
}
