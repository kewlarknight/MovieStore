import axios from "axios";
import {
  toast
} from "react-toastify";
import logService from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;



axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logService.log(error);
    toast.error("unexpected error occurred!");
    // toast.error("unexpected error occurred! !", {
    //   position: toast.POSITION.TOP_LEFT
    // });
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};