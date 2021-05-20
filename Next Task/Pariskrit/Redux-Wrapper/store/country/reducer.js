import * as actionTypes from "../actions/actionTypes";

const initialState = {
  countriesList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_COUNTRY:
      return {
        countriesList: action.payload,
      };

    case actionTypes.ADD_COUNTRY:
      return {
        countriesList: [action.payload, ...state.countriesList],
      };
    case actionTypes.DELETE_COUNTRY:
      return {
        countriesList: [
          ...state.countriesList.filter((country) => country.id !== action.id),
        ],
      };
    case actionTypes.EDIT_COUNTRY:
      return {
        countriesList: [
          ...state.countriesList.map((country) =>
            country.id === action.payload.id ? action.payload : country
          ),
        ],
      };
    default:
      return state;
  }
}
