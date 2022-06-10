import { ADD_NEWS, DELETE_NEWS } from "./actionTypes";

export const addNews = (payload) => (dispatch, getState) => {
  const formTitle = payload.title;

  payload = {
    id: Math.floor(Math.random() * 1000000) + 1,
    title: `${payload.title} - ${payload.publisher}`,
    published: new Date(),
    link: payload.url,
  };

  const { newsResult } = getState().search;

  const sameTitle = newsResult.find(
    (news) => news.title?.split("-")[0]?.trim() === formTitle
  );

  if (sameTitle) {
    return "duplicate news title";
  }

  dispatch({
    type: ADD_NEWS,
    payload,
  });
};

export const deleteNews = (id) => {
  return {
    type: DELETE_NEWS,
    payload: id,
  };
};
