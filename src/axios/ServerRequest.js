import  { API,BASE_URL} from "./API";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-simple-toast";
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
  console.log(email);
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
  }).catch((err)=>{
    console.log(err);

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
