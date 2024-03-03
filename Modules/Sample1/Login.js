import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Login details</Text>
      <View
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
          margin: '5%',
        }}>
        <TouchableOpacity
          onPress={() => {
            
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
