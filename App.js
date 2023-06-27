/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Toast from 'react-native-toast-message';
import {LeaderBoard} from './src/screens';
import {ToastMessage} from './src/components';

function App() {
  const toastConfig = {
    errorToast: ({type, props}) => (
      <ToastMessage
        type={type === 'errorToast' ? false : true}
        title={props.title}
        desc={props.desc}
      />
    ),
    successToast: ({type, props}) => (
      <ToastMessage
        type={type === 'successToast' ? true : false}
        title={props.title}
        desc={props.desc}
      />
    ),
  };
  return (
    <SafeAreaView style={styles.appView}>
      <LeaderBoard />
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  appView: {flex: 1},
});
