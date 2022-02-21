import axios from "axios";
//const URL = 'http://192.168.1.101/grocerystore/';
const URL = "https://nt118.herokuapp.com/api/v1/";
 const BASE_URL = URL;

const API = async (config) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "net work error",
          status: 500,
        };
      }
      if (error.response.status === 401) {
        console.log("Unauthorised");
      }
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
};
const mainApi=axios.create({
  baseURL:"https://nt118.herokuapp.com/api/v1/",
})
export  {API,mainApi,BASE_URL};
