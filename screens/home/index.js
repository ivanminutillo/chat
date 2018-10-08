import React, { Component } from "react";
import { Font } from "expo";
import HomeList from "./homelist";
import styled, { ThemeProvider } from "styled-components";
import dark from "../../utils/theme/dark";
import Input from "../../components/smartsentence";
import { KeyboardAvoidingView, View, Text } from "react-native";
import Header from "../../components/header";
import PopupDialog, { SlideAnimation, DialogTitle } from "react-native-popup-dialog";
import { Feather } from "@expo/vector-icons";


const slideAnimation = new SlideAnimation({
  slideFrom: "bottom"
});

const Container = styled.View`
  background: ${props => props.theme.colors.p800};
  flex: 1;
  flex-direction: column;
`;


const SmartSentence = styled.View`
  border-top-color: #f0f0f020;
  border-top-width: 1px;
  flex-direction: row;
`;


const ActionsList = styled.View`
  background: #f0f0f0;
  flex: 1;
  padding: 8px;
  padding-bottom: 0;
`;
const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 4px;
  border-bottom-color: rgba(0,0,0,.1)
  border-bottom-width: 1px;
  padding: 0 8px;
  height: 50px;
`;
const ItemTitle = styled.Text`
  line-height: 50px;
  margin-left: 8px;
  font-size: ${props => props.theme.fontSize.h3};
  color: ${props => props.theme.colors.p800};
`;

const ItemIcon = styled.View`
  margin-top: 15px;
`;

export default class Home extends React.Component {
  state = {
    fontLoaded: false
  };
  
  static navigationOptions = ({navigation}) => {
    return {
      header: headerProps => {
        return (
          <ThemeProvider theme={dark}>
            <Header {...headerProps} title={navigation.getParam('name', 'NO-name')} isTag />
          </ThemeProvider>
        );
      }
    }
  };

  showDialog = () => {
    return this.popupDialog.show();
  };

  async componentDidMount() {
    await Font.loadAsync({
      "fira-bold": require("../../assets/fonts/FiraSans-Bold.ttf"),
      "fira-medium": require("../../assets/fonts/FiraSans-Medium.ttf"),
      fira: require("../../assets/fonts/FiraSans-Regular.ttf"),
      "fira-italic": require("../../assets/fonts/FiraSans-Italic.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <ThemeProvider theme={dark}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <Container>
            <PopupDialog
              width={0.8}
              dialogAnimation={slideAnimation}
              containerStyle={
                {zIndex: 10, borderRadius: 4}
              }
              dialogTitle={<DialogTitle title="Choose a message type" />}
              ref={popupDialog => {
                this.popupDialog = popupDialog;
              }}
            >
              <ActionsList>
                <ListItem>
                  <ItemIcon>
                    <Feather size={20} name='message-square' color='#333' />
                  </ItemIcon>
                  <ItemTitle>Type a message</ItemTitle>  
                </ListItem> 
                <ListItem>
                  <ItemIcon>
                    <Feather size={20} name='activity' color='#333' />
                  </ItemIcon>
                  <ItemTitle>Log an economic event</ItemTitle>  
                </ListItem> 
                <ListItem>
                  <ItemIcon>
                    <Feather size={20} name='credit-card' color='#333' />
                  </ItemIcon>
                  <ItemTitle>Send a transaction</ItemTitle>  
                </ListItem> 
                <ListItem>
                  <ItemIcon>
                    <Feather size={20} name='anchor' color='#333' />
                  </ItemIcon>
                  <ItemTitle>Publish an offer/want</ItemTitle>  
                </ListItem> 
              </ActionsList> 
            </PopupDialog>
            <HomeList />
            <SmartSentence>
              <Input popupDialog={this.showDialog} />
            </SmartSentence>
          </Container>
        </KeyboardAvoidingView>
      </ThemeProvider>
    ) : null;
  }
}
