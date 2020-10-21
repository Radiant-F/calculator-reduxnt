import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TabNav from './src/route/TabNav';
import Navigator from './src/route/Navigator';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
