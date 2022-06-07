import axios from "axios";
import { FETCH_DEFAULT_SEARCH, UNMOUNT_DEFAULT_SEARCH } from "./actionTypes";

export const fetchImage = () => async (dispatch) => {};

export const unmountAll = () => (dispatch) => {
  dispatch({
    type: UNMOUNT_DEFAULT_SEARCH,
  });
};

export const fetchAll = (searchTerm) => async (dispatch) => {
  const { data } = await axios.get(
    `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchTerm}`,
    {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "SG",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "78d1284d4cmsh70c40a76d1a3c36p139354jsnb20955a3a89e",
      },
    }
  );

  dispatch({
    type: FETCH_DEFAULT_SEARCH,
    payload: data.results,
  });
};
