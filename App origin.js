// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import SplashScreen from './src/home/splashScreen';
// import Home from './src/home/homeOriginal';
// import HomeDemo from './src/home/homeDEMO';
// import Navigator from './src/home/navigator';
// import Array from './src/home/practice/array';
// import Navigator from './src2/components/navigator';
// import Splash from './src3/auth/splash';
// import AscStrg from './src2/components/ascStrg';
// import Home from './src3/components/Home';
// import Splash from './src4/auth/splash';
// import Hai from './src4/hai';
// import Main from './ReduxCalc/Screen';
import React, {Component} from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import style from './src/screens/style';
import Calc from './calculator/Screen/Calc';

export class App extends Component {
  render() {
    return <Calc />;
  }
}

export default App;
