import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './TabNav';
import Calc2 from '../screens/Calc2';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Aku" component={Calc2} />
        <Stack.Screen name="Halo" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
