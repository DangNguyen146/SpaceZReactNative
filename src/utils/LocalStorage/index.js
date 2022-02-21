import AsyncStorage from "@react-native-async-storage/async-storage";
const USER_DETAILS = "user_details";

export const setUserDetails = async (user) => {
  await AsyncStorage.setItem(USER_DETAILS, JSON.stringify(user.token));

};

export const getToken = async () => {
  try {
    let userDetails = await AsyncStorage.getItem(USER_DETAILS);
    userDetails = JSON.parse(userDetails);
    return userDetails;
  } catch (error) {
    console.log("Error fetching High Scores", error);
    return null;
  }
};
