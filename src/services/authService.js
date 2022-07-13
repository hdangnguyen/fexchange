import jwt from "jsonwebtoken";
import axios from "axios";

export async function UserIsValid(token) {
  console.log("the token is " + token.user);
  let bodyFormData = new FormData();
  var decodedToken = jwt.decode(token);
  bodyFormData.append("tokenId", token);
  await axios({
    method: "POST",
    url: process.env.REACT_APP_API_URL + "/api/login/callback",
    headers: {
      "content-type": "application/json",
    },
    data: bodyFormData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  var dateNow = new Date();
  if (decodedToken.exp > dateNow.getTime() / 1000) return true;
  else return false;
}
