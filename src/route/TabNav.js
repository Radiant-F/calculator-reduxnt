import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import History2 from '../screens/History2';
import Calc from '../screens/Calc';
import MyBottomTab from './BottomTab';
const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyBottomTab} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNav;
