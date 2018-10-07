import React, { Component } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { Feather } from "@expo/vector-icons";

const Navbar = styled.View`
  position: relative;
  flex: 1;
  background-color: #36393f;
  flex-direction: column;
  flex-direction: row;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,.2);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
`;

const WrapperHeaderLeft = styled.View`
  flex-direction: row;
  padding-left: 16px;
`;

const WrapperHeaderRight = styled.View`
  flex-direction: row;
  margin-left: 16px;
  flex: 1;
`;

const HeaderTitle = styled.Text`
  color: ${props => props.theme.colors.p100};
  font-weight: 700;
  font-size: 16px;
  flex: 1;
`;

const TitleContent = styled.Text`
  line-height: 50px;
  color: ${props => props.theme.colors.p100};
  font-weight: 700;
  font-size: 16px;
  flex: 1;
`;
const TitleSpan = styled.Text`
  padding-right: 8px;
  line-height: 50px;
  color: ${props => props.theme.colors.p200};
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  flex: 1;
`;

const Left = styled.TouchableOpacity`
  width: 20px;
  margin-top: 16px;
  margin-right: 8px;
`;

const RightIcon = styled.TouchableOpacity`
  width: 20px;
  margin-top: 14px;
  margin-right: 16px;
`;

const HeaderRight = props => (
  <WrapperHeaderRight>
    <HeaderTitle>
      <TitleSpan># </TitleSpan>
      <TitleContent>general</TitleContent>
    </HeaderTitle>
    <RightIcon onPress={() => alert("This is a button!")}>
      <Feather size={20} name="search" color="#99ADC6" />
    </RightIcon>
    <RightIcon onPress={() => alert("This is a button!")}>
      <Feather size={20} name="sidebar" color="#99ADC6" />
    </RightIcon>
  </WrapperHeaderRight>
);

const HeaderLeft = ({ index, navigation }) => {
  return (
    <WrapperHeaderLeft>
      {index === 0 && (
        <Left onPress={() => navigation.toggleDrawer()}>
          <Feather size={20} name="menu" color="#99ADC6" />
        </Left>
      )}
      {index > 0 && (
        <Left onPress={() => navigation.goBack(0)}>
          <Feather size={20} name="arrow-left" color="#99ADC6" />
        </Left>
      )}
      {/* <Img src={`https://picsum.photos/200/300`} />
      <Title>ivan minutillo</Title>
      <LeftSpan>
        <Feather size={20} name="chevron-down" color="#99ADC6" />
      </LeftSpan> */}
    </WrapperHeaderLeft>
  );
};

const Header = props => {
  const { index, navigation } = props;
  return (
    <Navbar>
      <ComposedHeaderLeft index={index} navigation={navigation} />
      {/* <HeaderLeft index={index} navigation={navigation} /> */}
      <HeaderRight />
    </Navbar>
  );
};

const ComposedHeaderLeft = compose()(HeaderLeft);


export default Header;
