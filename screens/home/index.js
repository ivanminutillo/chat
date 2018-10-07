import React, { Component } from "react";
import { Font } from "expo";
import HomeList from './homelist'
import styled, { ThemeProvider } from "styled-components";
import dark from '../../utils/theme/dark'
import Input from '../../components/smartsentence'
import {KeyboardAvoidingView} from 'react-native'
const View = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Container = styled.View`
  background: #36393f;
  flex: 1;
  flex-direction: column;
`;

const SmartSentence = styled.View`
  border-top-color: #f0f0f020;
  border-top-width: 1px;
  height: 80px;
  flex-direction: row;
`;


export default class Home extends React.Component {
  state = {
    fontLoaded: false
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
       <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View>
        <Container>
          <HomeList />
          <SmartSentence>
            <Input />
          </SmartSentence>
        </Container>
      </View>
      </KeyboardAvoidingView>
    </ThemeProvider>
    ) : null;
  }
}
