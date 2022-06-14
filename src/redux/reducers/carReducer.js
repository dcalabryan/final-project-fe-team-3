import { GET_FILTERED_CARS, CARS_ERROR } from "../actions/types";

const initialState = {
  cars: [],
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case CARS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
