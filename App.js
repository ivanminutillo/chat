import React from "react";
import { Platform, Text } from "react-native";
import Home from "./screens/home";
import Channels from "./screens/channels";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Header from "./components/header";
import styled, { ThemeProvider } from "styled-components";
import dark from "./utils/theme/dark";

const View = styled.View`
  flex: 1;
  margin: 0;
  height: 80px;
  margin-top: 20px;
  padding: 8px;
  padding-top: 0;
  background-color: ${props => props.theme.colors.b100};
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  margin: 0;
`;

const Img = styled.Image`
  border-radius: ${props => props.theme.avatar.radius};
  width: ${props => props.theme.avatar.size};
  height: ${props => props.theme.avatar.size};
  background-color: ${props => props.theme.colors.p600};
`;

const AvatarTitle = styled.Text`
  margin-left: 8px;
  line-height: ${props => props.theme.avatar.size};
  font-weight: 500;
  flex: 1;
  color: ${props => props.theme.colors.p100};
  font-size: ${props => props.theme.fontSize.h2};
`;

const AvatarWrapper = styled.TouchableOpacity`
  height: 48px;
  margin-bottom: 16px;
  margin-top: 20px;
  flex-direction: row;
  ${props =>
    props.active &&
    css`
      background: ${props => props.theme.colors.b200};
    `};
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
    }
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
  })
};

const MainStack = createStackNavigator(
  {
    Main: Home,
    Channels: Channels
  },
  {
    initialRouteName: "Channels",
    ...baseStackConfig
  }
);

const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainStack }
  },
  {
    drawerWidth: 270,
    contentComponent: props => (
      <ThemeProvider theme={dark}>
        <ScrollView>
          <View>
            <AvatarWrapper>
              <Img source={{ uri: "https://picsum.photos/200" }} />
              <AvatarTitle>Ivan Minutillo </AvatarTitle>
            </AvatarWrapper>
          </View>
        </ScrollView>
      </ThemeProvider>
    )
  }
);

export default Drawer;
