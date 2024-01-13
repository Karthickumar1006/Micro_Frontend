import React , {useCallback, useState} from 'react';
import {View, TouchableOpacity,  Platform, Text, Alert,  NativeModules,BackHandler} from 'react-native';

const {MicroFrontend} = NativeModules;

const SplashScreen = ({ navigation }) => {
  
  const handlePressReg =  useCallback(
    async () => {
     console.log("Testing",Platform.OS);
     
      
     MicroFrontend?.OpenSuperApp(
        'Register',
        `index.${Platform.OS}-reg.bundle`,
        {
          initialValue : "Login Details====>",
          initialValue1:"Testing",
        },
        false,
        () => {},
      );
      console.log("Testing2");
      const result = await MicroFrontend?.getBundleNames();
      return result;
    },
    [],
  );

  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
          margin: '5%',
        }}>
        <TouchableOpacity onPress={() => handlePressReg()}>
          <Text style={{color: 'white', textAlign: 'center'}}>{"Register"}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
          margin: '5%',
        }}>
        <TouchableOpacity onPress={()=>{
         navigation.navigate('Login')
        }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
