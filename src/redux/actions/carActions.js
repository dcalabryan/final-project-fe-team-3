import { CARS_ERROR, GET_FILTERED_CARS } from "./types";

export const getFilteredCars = (data_cars) => async (dispatch) => {
  try {
    if (data_cars.passenger === undefined) {
      data_cars.passenger = 0;
    }
    console.log(data_cars.passenger);
    const response = await fetch(
      process.env.REACT_APP_BACKEND +
        "/api/v1/cars" +
        "?" +
        new URLSearchParams({
          date: data_cars.date,
          time: data_cars.time,
          passenger: data_cars.passenger,
        }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    dispatch({
      type: GET_FILTERED_CARS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CARS_ERROR,
      payload: error.message,
    });
  }
};
