import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const CellView = props => {
  const {isSearched, text} = props;
  return (
    <View style={styles.cellView}>
      <Text style={styles.cell(isSearched)}>{text}</Text>
    </View>
  );
};
