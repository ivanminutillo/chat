import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

const View = styled.View`
  height: 185px;
  flex: 1;
`
const Text = styled.Text`
`

const Wrapper = styled.View`
  flex: 1;
  max-height: 50px;
  border-width: 0;
  background-color: ${props => props.theme.colors.p800};
  flex-direction: row;
  margin-bottom: 0;
  padding: 0 8px;
`;
const Icon = styled.TouchableOpacity`
  width: 20px;
  margin-top: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  border-width: 0;
  background-color: ${props => props.theme.colors.p800};
  padding: 0 16px;
  min-height: 50px;
  color: #f0f0f0;
  flex-direction: column;
`;


export default props => {
  return (
    <Wrapper>
      <Icon onPress={() => props.popupDialog()}>
        <Feather size={20} name="grid" color="#f0f0f050" />
      </Icon>
      <Input
        multiline
        underlineColorAndroid="#36393f"
        selectionColor="#36393f"
        placeholder="Message"
      />
      <Icon>
        <Feather size={20} name="arrow-right" color="#f0f0f0" />
      </Icon>
    </Wrapper>
  );
};
