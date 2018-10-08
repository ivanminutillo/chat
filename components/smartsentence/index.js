import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

const Wrapper = styled.View`
  flex: 1;
  height: 50px;
  border-width: 0;
  background-color: #484b51;
  flex-direction: row;
  margin-bottom:0;
  padding: 0 8px;
`;
const Icon = styled.View`
  width: 20px;
  margin-top: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  border-width: 0;
  background-color: #484b51;
  padding: 0 16px;
  color: #f0f0f0;
  flex-direction: column;

`;

export default props => {
  return (
        <Wrapper>
            <Icon>
               <Feather size={20} name="grid" color="#f0f0f050" />
            </Icon>
            <Input underlineColorAndroid="#484b51"
    selectionColor="#484b51" placeholder="Message" />
            <Icon><Feather size={20} name="arrow-right" color="#f0f0f0" /></Icon>
        </Wrapper>
  );
};
