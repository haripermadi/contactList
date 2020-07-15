/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';

import Home from './src/screen/home';

import store from './src/redux/store';

Icon.loadFont();

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
