import jwt from "jsonwebtoken";

export function UserIsValid(token) {
  var decodedToken = jwt.decode(token);
  console.log(decodedToken)
  var dateNow = new Date();
  if (decodedToken.exp > dateNow.getTime() / 1000) return true;
  else return false;
}
