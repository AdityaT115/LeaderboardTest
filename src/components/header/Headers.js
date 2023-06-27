import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Headers = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Leaderboard</Text>
    </View>
  );
};
