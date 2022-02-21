import API, { BASE_URL } from "./API";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-simple-toast";
import axios from "axios";
import { getToken } from "../utils/LocalStorage";

export const CategoryImage = BASE_URL + "assets/images/ProductImage/category/";
export const ProductImage = BASE_URL + "assets/images/ProductImage/product/";

export const checkInternetConnection = () => {
  NetInfo.fetch().then((state) => {
    if (state.isConnected === false) {
      Toast.showWithGravity(
        "No internet connection",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
  });
};

export const userLogin = async (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  return await API({
    method: "POST",
    url: "user/login",
    data: body,
  }).then((res) => {
    return res;
  });
};

export const userRegister = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  const body = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
  };
  return await API({
    method: "POST",
    url: "user/register",
    data: body,
  }).then((res) => {
    return res;
  });
};
const URL = "http://192.168.1.8:3000/api/v1/";

export const postProfile = async (data) => {
  const headers = {
    token: getToken,
  };
  axios.post(URL + "/profile", data, { headers }).then((response) => {
    return response.data.newUser;
  });
};
