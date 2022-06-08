import {
  SELECT_SEARCH_TYPE,
  UNMOUNT_DEFAULT_SEARCH,
  FETCH_DEFAULT_SEARCH,
  FETCH_IMAGE,
  FETCH_NEWS,
  DELETE_NEWS,
} from "../actions/actionTypes";

const initialState = {
  searchType: "default",
  searchResult: [],
  imageResult: [],
  newsResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };

    case UNMOUNT_DEFAULT_SEARCH:
      return {
        ...state,
        searchResult: [],
        imageResult: [],
        newsResult: [],
      };

    case FETCH_DEFAULT_SEARCH:
      return {
        ...state,
        searchResult: action.payload,
      };

    case FETCH_IMAGE:
      return {
        ...state,
        imageResult: action.payload,
      };

    case FETCH_NEWS:
      return {
        ...state,
        newsResult: action.payload,
      };

    case DELETE_NEWS:
      return {
        ...state,
        newsResult: state.newsResult.filter(
          (news) => news.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default searchReducer;
