import React, {useCallback, useEffect} from 'react';
import {View, TouchableOpacity, Text, NativeModules, Image,Platform} from 'react-native';

const {MicroFrontend} = NativeModules;

const SplashScreen = ({navigation}) => {

  const handleRegisterPress = useCallback(async () => {
    console.log("MicroFrontend===>","platfrom====>"+Platform.OS);
    try {
      setTimeout(() => {
        MicroFrontend?.OpenSuperApp(
          'Sample',
          `index.${Platform.OS}-log.bundle`,
          {
           text:'testing'
          },
          false,
          () => {},
        );
      }, 2000);
    
      const result = await MicroFrontend?.getBundleNames();
      console.log("MicroFrontend===>","result====>"+result);
      return result;
    } catch (error) {
      console.log("MicroFrontend===>","Error====>"+error);

      console.error('Error:', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.greenBox}>
        <Image
          source={{
            uri: 'https://addons-media.operacdn.com/media/CACHE/images/themes/35/141135/1.0-rev1/images/1b300742-c5bb-48c1-8ed5-a3b5844eccff/5d13c593ac284398051caeae62ad59ea.jpg',
          }}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton onPress={handleRegisterPress} text="Register" />
        <CustomButton
          onPress={() => {
            navigation.navigate('Login');
          }}
          text="Login"
        />
      </View>
    </View>
  );
};

const CustomButton = ({onPress, text}) => (
  <View style={styles.buttonWrapper}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  greenBox: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
  },
  buttonWrapper: {
    padding: '3%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginVertical: '3%',
  },
  buttonText: {
    textAlign: 'center',
  },
};

export default SplashScreen;
