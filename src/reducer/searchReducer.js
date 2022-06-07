import {
  FETCH_DEFAULT_SEARCH,
  UNMOUNT_DEFAULT_SEARCH,
} from "../actions/actionTypes";

const initialState = {
  searchResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEFAULT_SEARCH:
      return {
        ...state,
        searchResult: action.payload,
      };

    case UNMOUNT_DEFAULT_SEARCH:
      return {
        ...state,
        searchResult: [],
      };

    default:
      return state;
  }
};

export default searchReducer;
