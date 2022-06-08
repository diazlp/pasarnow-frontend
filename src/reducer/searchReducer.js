import {
  SELECT_SEARCH_TYPE,
  UNMOUNT_DEFAULT_SEARCH,
  FETCH_DEFAULT_SEARCH,
  FETCH_IMAGE,
} from "../actions/actionTypes";

const initialState = {
  searchType: "default",
  searchResult: [],
  imageResult: [],
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

    default:
      return state;
  }
};

export default searchReducer;
