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

const IntroStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

global.currentScreenIndex = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  IntroStackScreen = () => (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <IntroStack.Screen name="SplashScreen" component={SplashScreen} />
      <IntroStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </IntroStack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
        >
          <RootStack.Screen name="Intro" component={this.IntroStackScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Signin" component={SigninScreen} />
          <RootStack.Screen name="EmailVery" component={EmailVeryScreen} />
          <RootStack.Screen name="HomeScreen" children={this.createTab} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

// https://youtu.be/OxXqywMaFV8 ==>tabbar
