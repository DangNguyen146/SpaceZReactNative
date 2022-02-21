import Axios from "axios";
import { URL } from "../../../../axios/config";

import { getToken } from "../../../../utils/LocalStorage";

export const actPostProfileApi = async (data) => {
  let self = this;
  let access_token = await getToken();
  return () => {
    Axios({
      url: URL + "profile",
      headers: {
        token: access_token,
      },
      data: data,
      method: "POST",
    })
      .then((result) => {
        if (result.data) self.props.navigation.navigate("Profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
