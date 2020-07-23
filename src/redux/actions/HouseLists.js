import { GET_HOUSES } from "./types";

export const fetchHouse = () => async (dispatch) => {
  let url = "https://rumahku-com.herokuapp.com/house";

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  
  dispatch({
    type: GET_HOUSES,
    payload: results.data,
  });
};
