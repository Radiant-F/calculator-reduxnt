import 'react-native-gesture-handler';
import React from 'react';
import History from '../screens/History';
import Calc from '../screens/Calc';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Kalulator" component={Calc} />
      <Tab.Screen name="Riwayat" component={History} />
    </Tab.Navigator>
  );
};

export default TabNav;
