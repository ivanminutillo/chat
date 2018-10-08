import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import dark from "../../utils/theme/dark";
import { Img, AvatarTitle, AvatarWrapper } from "../../atoms/avatar";
import { placeholder } from "polished";
import Header from '../../components/header'

const Wrapper = styled.View`
  flex-direction: row;
  flex: 1;
  background: ${props => props.theme.colors.p900};
`;

const List = styled.View`
  flex: 1;
  padding: 16px;
`;

class Channels extends React.Component {
  static navigationOptions = {
    header: headerProps => {
      return (
        <ThemeProvider theme={dark}>
            <Header {...headerProps} title={'Channels'}  />
        </ThemeProvider>
      );
    }
  };
  render() {
    return (
      <ThemeProvider theme={dark}>
        <Wrapper>
          <List>
            <AvatarWrapper
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Img source={{ uri: "https://picsum.photos/200" }} />
              <AvatarTitle>test </AvatarTitle>
            </AvatarWrapper>
            <AvatarWrapper
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Img source={{ uri: "https://picsum.photos/200" }} />
              <AvatarTitle>test </AvatarTitle>
            </AvatarWrapper>
            <AvatarWrapper
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Img source={{ uri: "https://picsum.photos/200" }} />
              <AvatarTitle>test </AvatarTitle>
            </AvatarWrapper>
            <AvatarWrapper
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Img source={{ uri: "https://picsum.photos/200" }} />
              <AvatarTitle>test </AvatarTitle>
            </AvatarWrapper>
          </List>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default Channels;
