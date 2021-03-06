import axios from "axios";
import {
  SELECT_SEARCH_TYPE,
  UNMOUNT_DEFAULT_SEARCH,
  FETCH_DEFAULT_SEARCH,
  FETCH_IMAGE,
  FETCH_NEWS,
} from "./actionTypes";

export const selectSearch = (value) => (dispatch) => {
  dispatch({
    type: SELECT_SEARCH_TYPE,
    payload: value,
  });
};

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
        "X-RapidAPI-Key": "a0d217071dmsh6bd1406a267622ap10872djsnf329aff3e3f7",
      },
    }
  );

  dispatch({
    type: FETCH_DEFAULT_SEARCH,
    payload: data.results,
  });
};

export const fetchImage = (searchTerm) => async (dispatch) => {
  const { data } = await axios.get(
    `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchTerm}`,
    {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "SG",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "a0d217071dmsh6bd1406a267622ap10872djsnf329aff3e3f7",
      },
    }
  );

  dispatch({
    type: FETCH_IMAGE,
    payload: data.image_results,
  });
};

export const fetchNews = (searchTerm) => async (dispatch) => {
  const { data } = await axios.get(
    `https://google-search3.p.rapidapi.com/api/v1/news/q=${searchTerm}`,
    {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "SG",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "a0d217071dmsh6bd1406a267622ap10872djsnf329aff3e3f7",
      },
    }
  );

  let payload = data.entries
    .slice(0, 6)
    .map((result) => ({
      id: result.id,
      title: result.title,
      published: result.published,
      link: result.link,
    }))
    .sort((a, b) => new Date(b.published) - new Date(a.published));

  dispatch({
    type: FETCH_NEWS,
    payload,
  });
};
