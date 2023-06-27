import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../utils';

export const LeaderBoradInput = props => {
  const {inputValue, setInputValue, onSearch} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.inputView}>
        <Image style={styles.searchIcon} source={Images.searchIcon} />
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onSearch()}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
