import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  RNSScreen,
  RNSScreenStack,
} from 'react-native-screens';

function HomeScreen({navigation}) {
  return (  
    <RNSScreen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} 
        />
      </View>
    </RNSScreen>
  );
}

function DetailsScreen() {
  return (
    <RNSScreen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>  
      </View>
    </RNSScreen>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RNSScreenStack>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
          <Stack.Screen 
            name="Details"
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </RNSScreenStack>
    </NavigationContainer>
  );
}

export default App;