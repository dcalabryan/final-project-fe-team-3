import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "./types";
import Swal from "sweetalert2";

export const login = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    const response_user = await fetch(
      `${process.env.REACT_APP_BACKEND}/api/v1/whoami`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${result.token}`,
        },
      }
    );
    const user = await response_user.json();

    if (result.token) {
      await Swal.fire({
        title: "Success",
        text: "You have successfully logged in",
        icon: "success",
      });
      dispatch({
        type: LOGIN,
        payload: result.token,
        user: user,
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
        timer: 2000,
      });
      authError(result.error);
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 2000,
    });
    authError(error);
  }
};
export const whoami = (data) => async (dispatch) => {
  try {
    const response_user = await fetch(
      `${process.env.REACT_APP_BACKEND}/api/v1/whoami`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    const user = await response_user.json();

    if (user.token) {
      dispatch({
        type: LOGIN,
        payload: window.localStorage.getItem("token"),
        user: user,
      });
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
    authError(error);
  }
};

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const logout = () => async (dispatch) => {
  await Swal.fire({
    title: "Success",
    text: "You have successfully logged out",
    icon: "success",
  });
  dispatch({
    type: LOGOUT,
  });
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/api/v1/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.token) {
      await dispatch({
        type: LOGIN,
        payload: result.token,
        user: result.user,
      });
      await Swal.fire({
        title: "Success",
        text: "You have successfully logged in",
        icon: "success",
      });
    } else {
      authError(result.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
      });
    }
  } catch (error) {
    authError(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/api/v1/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    dispatch({
      type: REGISTER,
      payload: result.user,
    });
    if (result.user) {
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have successfully registered",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
      });
    }
  } catch (error) {
    authError(error);
  }
};
