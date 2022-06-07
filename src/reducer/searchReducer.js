import {
  FETCH_DEFAULT_SEARCH,
  FETCH_IMAGE,
  UNMOUNT_DEFAULT_SEARCH,
} from "../actions/actionTypes";

const initialState = {
  searchResult: [],
  imageResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
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
