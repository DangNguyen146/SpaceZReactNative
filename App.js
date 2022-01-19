import { NavigationContainer } from "@react-navigation/native"; //dùng để quản lý, chuyển màn hình.
import React, { Component } from "react";
import SplashScreen from "./src/screen/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SigninScreen from "./src/screen/SigninScreen";

const IntroStack = createStackNavigator();
const RootStack = createStackNavigator();

global.currentScreenIndex = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

// https://youtu.be/OxXqywMaFV8 ==>tabbar
