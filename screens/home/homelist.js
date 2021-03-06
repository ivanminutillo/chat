import React from "react";
import { Dimensions } from "react-native";
import feed from "./mockupFeed";
import styled from "styled-components";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider
} from "recyclerlistview";

const View = styled.View`
  flex-direction: row;
  flex: 1;
`;

const Feed = styled.TouchableOpacity`
  padding: 8px;
  border-bottom-color: #f0f0f020;
  border-bottom-width: 1px;
  flex: 1;
`;
const FeedRow = styled.View`
  height: 32px;
  flex: 1;
  flex-direction: row;
`;
const FeedImg = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 3px;
`;

const Sentence = styled.Text`
  color: ${props => props.theme.colors.p100};
  font-size: 14px;
  letter-spacing: 0.4px;
  margin-left: 8px;
  flex: 1;
`;
const Note = styled.Text`
  margin-top: 8px;
  margin-left: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.p300};
  flex: 1;
`;
const Date = styled.Text`
  font-size: 12px;
  margin-left: 8px;
  color: ${props => props.theme.colors.p300};
  font-weight: 600;
  line-height: 32px;
`;

const InfoContainer = styled.View`
flex: 1;
`


export default class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);
    let { width } = Dimensions.get("window");
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this._layoutProvider = new LayoutProvider(
      index => 1,
      (type, dim) => {
        return (dim.width = width), (dim.height = 100);
      }
    );
    this._rowRenderer = this._rowRenderer.bind(this);
    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(feed))
    };
  }

  _generateArray(n) {
    let arr = new Array();
    for (let i = 0; i < n.length; i++) {
      arr.push(n[i]);
    }
    return arr;
  }

  _rowRenderer(type, item) {
    return (
      <Feed>
        <FeedRow>
          <FeedImg source={{ uri: item.image }} />
          <InfoContainer>
            <Sentence>{item.sentence}</Sentence>
            <Note>{item.note}</Note>
            <Date>{item.date}</Date>
          </InfoContainer>
        </FeedRow>
      </Feed>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.state.dataProvider}
          rowRenderer={this._rowRenderer}
        />
      </View>
    );
  }
}
