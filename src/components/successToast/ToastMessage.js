import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export const ToastMessage = props => {
  const {title, desc, type} = props || {};
  console.log('🚀 ~ file: ToastMessage.js:8 ~ ToastMessage ~ type:', type);
  return (
    <View pointerEvents="none" style={styles.toastContainer(type)}>
      <Text style={styles.title(type)}>{title}</Text>
      {desc && <Text style={styles.descStyle(type)}>{desc}</Text>}
    </View>
  );
};
