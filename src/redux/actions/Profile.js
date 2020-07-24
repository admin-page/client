import { GET_PROFILES } from "./types";
import jwt_decode from 'jwt-decode'

export const fetchProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token")
  const tokenDecoded = jwt_decode(token)
  const id = tokenDecoded.id
  
  console.log(id)
  let url = `https://rumahku-com.herokuapp.com/users/${id}`;

  
  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization" : `Bearer ${token}` 
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();

  
  dispatch({
    type: GET_PROFILES,
    payload: results.result,
  });
};