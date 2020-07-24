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

    if (response.status === 200 && dataUser.status !== "ACTIVE") {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: "Your Account isn't Active, please contact administration for Activation ",
      });
    

  
      
    }else if (response.status === 200 && dataUser.status === "ACTIVE") {
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
        history.push("/userprofile")
        window.location.reload();
      }, 3000)
      
      ;
    } else {
      Swal.fire({
        icon: "error",
        title: "Forbidden",
        text: "wrong email or Password"
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Forbidden",
      text: "Wrong Email or Password"
    });;
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
    for(let key in formData){
      if(formData[key] ===""){
        delete formData[key]
      }
    }



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
        history.push("/login");
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


export {
 
  userLogin,
  GET_USER_LOGIN,
  LOGIN,
  REGISTER,
  GET_USER_REGISTER,
  getUserLogin,
  registerUser,
};
