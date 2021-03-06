import { NavigationContainer } from "@react-navigation/native"; //dùng để quản lý, chuyển màn hình.
import React, { Component } from "react";
import SplashScreen from "./src/screen/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SigninScreen from "./src/screen/SigninScreen";
import EmailVeryScreen from "./src/screen/EmailVeryScreen";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import SettingScreen from "./src/screen/SettingScreen/SettingScreen";
import NFCScreen from "./src/screen/NFCScreen/NFCScreen";
import ProfileOnlineScreen from "./src/screen/ProfileOnlineScreen/ProfileOnlineScreen";
import SendMessScreen from "./src/screen/SendMessScreen/SendMessScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import CreateSlug from "./src/screen/ProfileOnlineScreen/CreateSlug";
import SelectTemplate from "./src/screen/ProfileOnlineScreen/SelectTemplate";
import EditHomeProfile from "./src/screen/ProfileOnlineScreen/CreateProfile/EditHomeProfile";
import EditContentUp from "./src/screen/ProfileOnlineScreen/CreateProfile/EditContentUp";
import { Provider as StoreProvider } from "react-redux";
import rootReducer from "./src/redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppLoading from "expo-app-loading";
import EditContentCenter from "./src/screen/ProfileOnlineScreen/CreateProfile/EditContentCenter";
import EditContentDown from "./src/screen/ProfileOnlineScreen/CreateProfile/EditContentDown";
import SelectIconImgProfile from "./src/screen/ProfileOnlineScreen/SelectIconProfile/SelectIconImgProfile";
import SelectIconProfile from "./src/screen/ProfileOnlineScreen/SelectIconProfile/SelectIconProfile";
import EditContentGraphisc from "./src/screen/ProfileOnlineScreen/CreateProfile/EditContentGraphisc";
import Preview from "./src/screen/ProfileOnlineScreen/Preview/PreView";
import UpdateHomeProfile from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateHomeProfile";
import UpdateContentUp from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateContentUp";
import UpdateContentGraphisc from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateContentGraphisc";
import UpdateContentDown from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateContentDown";
import UpdateContentCenter from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateContentCenter";
import UpdateSlug from "./src/screen/ProfileOnlineScreen/EditProfile/UpdateSlug";
import UpdateIconProfile from "./src/screen/ProfileOnlineScreen/EditProfile/SelectIconProfileUpdate/UpdateIconProfile";
import UpdateIconImgProfile from "./src/screen/ProfileOnlineScreen/EditProfile/SelectIconProfileUpdate/UpdateIconImgProfile";
import * as Linking from "expo-linking";
import CreateNameCard from "./src/screen/HomeScreen/CreateNameCard";
import HomeCreate from "./src/screen/HomeScreen/CreateCard/HomeCreateMT";
import HomeCreateMT from "./src/screen/HomeScreen/CreateCard/HomeCreateMT";
import HomeCreateMS from "./src/screen/HomeScreen/CreateCard/HomeCreateMS";
import ViewCardItem from "./src/screen/HomeScreen/EditCard/ViewCardItem";
import HomeEditMT from "./src/screen/HomeScreen/EditCard/HomeEditMT";
import HomeEditMS from "./src/screen/HomeScreen/EditCard/HomeEditMS";
import ViewCardPublic from "./src/screen/HomeScreen/ViewCardPublic/ViewCardPublic";
import OrderScreen from "./src/screen/OrderScreen/OrderScreen";
import ViewCardItemSocail from "./src/screen/NFCScreen/ViewCardItem/ViewCardItemSocail";
import OrderViewSocial from "./src/screen/NFCScreen/OrderViewSocial/OrderViewSocial";

const IntroStack = createStackNavigator();
const CreateProfile = createStackNavigator();
const SocaialScreen = createStackNavigator();
const PreviewProfile = createStackNavigator();
const RootStack = createStackNavigator();
const CreateCard = createStackNavigator();
const EditCard = createStackNavigator();
const Tab = createBottomTabNavigator();

global.currentScreenIndex = 0;

let customFonts = {
  "BalooTamma2-ExtraBold": require("./src/assets/font/BalooTamma2-ExtraBold.ttf"),
  "BalooTamma2-Bold": require("./src/assets/font/BalooTamma2-Bold.ttf"),
  "BalooTamma2-Medium": require("./src/assets/font/BalooTamma2-Medium.ttf"),
  "BalooTamma2-Regular": require("./src/assets/font/BalooTamma2-Regular.ttf"),
  "BalooTamma2-SemiBold": require("./src/assets/font/BalooTamma2-SemiBold.ttf"),
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false, data: null };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  handleDeppLinking(event) {
    let data = Linking.parse(event.url);
    this.setState({ data });
  }
  async componentDidMount() {
    this._loadFontsAsync();
    Linking.addEventListener("url", handleDeppLinking);
    return () => {
      Linking.removeEventListener("url");
    };
  }
  createTab = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let name = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "NFC") {
            name = "MaterialIcons";
            iconName = "nfc";
          } else if (route.name === "Profile") {
            name = "MaterialCommunityIcons";
            iconName = "face-profile";
          } else if (route.name === "Mess") {
            iconName = "message1";
          } else if (route.name === "Setting") {
            iconName = "setting";
          }

          if (name == "MaterialCommunityIcons")
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          else if (name == "MaterialIcons")
            return <MaterialIcons name={iconName} size={size} color={color} />;
          // You can return any component that you like here!
          else return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        animationEnabled: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NFC" component={NFCScreen} />
      <Tab.Screen name="Profile" component={ProfileOnlineScreen} />
      <Tab.Screen name="Mess" component={SendMessScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
  HomeCreateCard = () => (
    <CreateCard.Navigator
      initialRouteName="CreateCard"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <CreateCard.Screen
        name="CreateNameCardScreen"
        component={CreateNameCard}
      />
      <CreateCard.Screen name="CreateCardMTScreen" component={HomeCreateMT} />
      <CreateCard.Screen name="CreateCardMSScreen" component={HomeCreateMS} />
    </CreateCard.Navigator>
  );
  HomeEditCard = () => (
    <EditCard.Navigator
      initialRouteName="ViewCard"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <EditCard.Screen name="ViewCardScreen" component={ViewCardItem} />
      <EditCard.Screen name="EditCardMTScreen" component={HomeEditMT} />
      <EditCard.Screen name="EditCardMSScreen" component={HomeEditMS} />
      <EditCard.Screen name="OrderScreen" component={OrderScreen} />
    </EditCard.Navigator>
  );
  PreviewPrefile = () => (
    <PreviewProfile.Navigator
      initialRouteName="PreviewProfile"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <PreviewProfile.Screen name="PreviewProfileScreen" component={Preview} />
      <PreviewProfile.Screen
        name="UpdateHomeProfileScreen"
        component={UpdateHomeProfile}
      />
      <PreviewProfile.Screen
        name="UpdateContentUpScreen"
        component={UpdateContentUp}
      />
      <PreviewProfile.Screen
        name="UpdateContentGraphiscScreen"
        component={UpdateContentGraphisc}
      />
      <PreviewProfile.Screen
        name="UpdateContentDownScreen"
        component={UpdateContentDown}
      />
      <PreviewProfile.Screen
        name="UpdateContentCenterScreen"
        component={UpdateContentCenter}
      />
      <PreviewProfile.Screen name="UpdateSlugScreen" component={UpdateSlug} />
      <CreateProfile.Screen
        name="UpdateIconProfileScreen"
        component={UpdateIconProfile}
      />
      <CreateProfile.Screen
        name="UpdateIconImgProfileScreen"
        component={UpdateIconImgProfile}
      />
    </PreviewProfile.Navigator>
  );
  SocaialStackScreen = () => (
    <SocaialScreen.Navigator
      initialRouteName="DetaileCard"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <SocaialScreen.Screen
        name="ViewCardItemScreen"
        component={ViewCardItemSocail}
      />
      <SocaialScreen.Screen
        name="OrderViewSocial"
        component={OrderViewSocial}
      />
    </SocaialScreen.Navigator>
  );

  ProfileStackScreen = () => (
    <CreateProfile.Navigator
      initialRouteName="CreateProfile"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <CreateProfile.Screen name="CreateSlug" component={CreateSlug} />
      <CreateProfile.Screen name="SelectTemplate" component={SelectTemplate} />
      <CreateProfile.Screen
        name="EditHomeProfileScreen"
        component={EditHomeProfile}
      />
      <CreateProfile.Screen
        name="EditContentUpScreen"
        component={EditContentUp}
      />
      <CreateProfile.Screen
        name="EditContentCenterScreen"
        component={EditContentCenter}
      />
      <CreateProfile.Screen
        name="EditContentDownScreen"
        component={EditContentDown}
      />
      <CreateProfile.Screen
        name="SelectIconProfileScreen"
        component={SelectIconProfile}
      />
      <CreateProfile.Screen
        name="SelectIconImgProfileScreen"
        component={SelectIconImgProfile}
      />
      <CreateProfile.Screen
        name="EditContentGraphiscScreen"
        component={EditContentGraphisc}
      />
      <CreateProfile.Screen name="PreviewScreen" component={Preview} />
    </CreateProfile.Navigator>
  );
  IntroStackScreen = () => (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <IntroStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        data={this.state.data}
      />
      <IntroStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </IntroStack.Navigator>
  );
  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    if (this.state.fontsLoaded) {
      return (
        <StoreProvider store={store}>
          <NavigationContainer>
            <RootStack.Navigator
              screenOptions={{
                headerShown: false,
                animationEnabled: false,
              }}
            >
              <RootStack.Screen
                name="Intro"
                component={this.IntroStackScreen}
              />
              <RootStack.Screen name="Login" component={LoginScreen} />
              <RootStack.Screen name="Signin" component={SigninScreen} />
              <RootStack.Screen name="EmailVery" component={EmailVeryScreen} />

              <RootStack.Screen name="HomeScreen" children={this.createTab} />

              <RootStack.Screen
                name="CreateCard"
                component={this.HomeCreateCard}
              />

              <RootStack.Screen name="ViewCard" component={this.HomeEditCard} />
              <RootStack.Screen
                name="PreviewProfile"
                component={this.PreviewPrefile}
              />
              <RootStack.Screen
                name="ViewCardSocial"
                component={this.SocaialStackScreen}
              />
              <RootStack.Screen
                name="CreateProfile"
                component={this.ProfileStackScreen}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </StoreProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}

// https://youtu.be/OxXqywMaFV8 ==>tabbar
