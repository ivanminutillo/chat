import styled, {css} from "styled-components";

export const Img = styled.Image`
  border-radius: ${props => props.theme.avatar.radius};
  width: ${props => props.theme.avatar.size};
  height: ${props => props.theme.avatar.size};
  background-color:  ${props => props.theme.colors.p600};
`;

export const AvatarTitle = styled.Text`
  margin-left: 8px;
  line-height: ${props => props.theme.avatar.size};
  font-weight: 400;
  flex: 1;
  color: ${props => props.theme.colors.p100};
  font-size: ${props => props.theme.fontSize.h2};
`;

export const AvatarWrapper = styled.TouchableOpacity`
  height: 48px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(250, 250, 250, .2);
  flex-direction: row;
  ${props =>
    props.active &&
    css`
      background: ${props => props.theme.colors.b200};
    `};
`;
