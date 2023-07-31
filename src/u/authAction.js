import axios from "axios";
import { setCurrentUser } from './userSlice'
import jwt_decode from 'jwt-decode'

export const register = (userData) => {
  return (dispatch) => {
    // Make API request to register user
    axios.post("http://127.0.0.1:5000/register", userData)
      .then((res) => {
        // Dispatch success action if registration is successful
        dispatch(registerSuccess(res.data));
      })
      .catch((err) => {
        // Dispatch error action if registration fails
        dispatch(registerFailure(err.response.data.message));
      });
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    // Make API request to login user
    axios.post("http://127.0.0.1:5000/login", credentials)
      .then((res) => {
        // Dispatch success action if login is successful
        dispatch(loginSuccess(res.data.token));
        console.log(res.data.token)
      })
      .catch((err) => {
        // Dispatch error action if login fails
        dispatch(loginFailure(err.response.data.message));
      });
  };
};



export const loginUser = (userData) => (dispatch) => {
  // send a request to login endpoint
  axios
    .post('http://127.0.0.1:5000/login', userData)
    .then((res) => {
      // save user token to local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      // decode token to get user data and dispatch auth and user data to the store
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => console.log(err));
};

export const registerUser = (userData) => (dispatch) => {
    // send a request to register endpoint
    axios
      .post('http://127.0.0.1:5000/register', userData)
      .then(() => {
        // dispatch the login action with the newly registered user data
        dispatch(loginUser(userData));
      })
      .catch((err) => console.log(err));
  };













export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const registerSuccess = (token) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: token,
  };
};

const registerFailure = (error) => {
  return {
    type: "REGISTER_FAILURE",
    payload: error,
  };
};

const loginSuccess = (token) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: token,
  };
};

const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
};