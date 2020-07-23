import { GET_USER_LOGIN, GET_USER_REGISTER } from "./types";
import Swal from "sweetalert2";
import jwt_decode from 'jwt-decode'

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

const getUserLogin = (data) => {
  return {
    type: GET_USER_LOGIN,
    data,
  };
};

const userLogin = (formData, history) => async () => {
  try {
    const url = "https://rumahku-com.herokuapp.com/users/login";
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const dataUser = jwt_decode(result.result)
    console.log(dataUser)

    if (response.status === 200 && dataUser.status === "PENDING") {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: "Your Account isn't Active, call administration for Activation ",
      });
    } else if (response.status === 200 && dataUser.status === "ACTIVE") {
      localStorage.setItem("token", result.result);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        title: "Signed in successfully",
        icon: "success",
      });

      setTimeout(() => {
        history.push("/profle");
      }, 3000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: result.message,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const registerUser = (formData, history) => async () => {
  try {
    const url = "https://rumahku-com.herokuapp.com/users";
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", result.result);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        title: "Register Success",
        icon: "success",
      });

      setTimeout(() => {
        history.push("/profle");
      }, 3000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: result.message,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const logout = (history) => async () => {
  Swal.fire({
    icon: "success",
    title: "Terimakasih",
  });
  localStorage.removeItem("token");
  history.push("/");
};

export {
  logout,
  userLogin,
  GET_USER_LOGIN,
  LOGIN,
  REGISTER,
  GET_USER_REGISTER,
  getUserLogin,
  registerUser,
};
