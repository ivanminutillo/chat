import React from 'react';
import { Platform } from 'react-native';
import Home from './screens/home'
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Header from './components/header'
import styled, { ThemeProvider } from "styled-components";
import dark from './utils/theme/dark'


const View = styled.View`
  flex: 1;
  margin: 0;
`;


const baseStackConfig = {
  headerTransitionPreset: Platform.OS === "android" ? "fade-in-place" : "uikit",
  headerMode: "float",
  navigationOptions: ({ navigation }) => ({
    gesturesEnabled: ["dom", "ios"].includes(Platform.OS),
    headerStyle: {
      backgroundColor: "#20232D",
      ...(Platform.OS === "dom"
        ? {
            shadowOpacity: 0,
            height: 45,
            zIndex: 5
          }
        : null)
    },
    // headerForceInset: {
    //   top: Platform.OS === "ios" ? "always" : "never",
    //   bottom: "never"
    // },
    // headerTitleStyle: [
    //   Platform.OS === "dom"
    //     ? {
    //         flex: 1,
    //         textAlign: "center",
    //         padding: 20,
    //         color: "#f0f0f0"
    //       }
    //     : {}
    // ],
    header: headerProps => {
      return (
        <ThemeProvider theme={dark}>
           <View
              style={{
                marginTop: 20, marginBottom: 0
              }}
            >
            <Header {...headerProps} />
          </View>
        </ThemeProvider>
      );
    }
  })
};

const MainStack = createStackNavigator(
  {
    Main: Home
  },
  {
    initialRouteName: "Main",
    ...baseStackConfig
  }
);

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainStack }
  },
  {
    drawerWidth: 270
  }
);

export default Drawer;