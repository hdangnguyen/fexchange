import jwt from 'jsonwebtoken';
import axiosClient from './../utils/api/axiosClient';

export function UserIsValid(token) {
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
    var dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) return true;
    else return false;
}
