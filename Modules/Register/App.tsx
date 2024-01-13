import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
  NativeModules,
  BackHandler,
} from 'react-native';
const {MicroFrontend} = NativeModules;
const App = (props: any) => {
  useEffect(() => {
    console.log("initialValue",JSON.stringify(props));
    
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  const handlePressClose = () => {
    Alert.alert('Close');
  };

  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>

      <View
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
          margin: '5%',
        }}>
        <TouchableOpacity
          onPress={() => {
            MicroFrontend?.CloseSuperApp('Register');
            // backAction()
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
