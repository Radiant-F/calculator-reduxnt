import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Calc from '../screens/Calc';
import Calc2 from '../screens/Calc2';

const BottomTab = createBottomTabNavigator();

const MyBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="A Rizky" component={Calc} />
      <BottomTab.Screen name="Aku" component={Calc2} />
    </BottomTab.Navigator>
  );
};

export default MyBottomTab;
