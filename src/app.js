import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_Cdt1r1Q6utUQL4afg-vq530-S6mBOSA',
      authDomain: 'reactnative-auth-3fc74.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-3fc74.firebaseio.com',
      storageBucket: 'reactnative-auth-3fc74.appspot.com',
      messagingSenderId: '1084024094014'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
