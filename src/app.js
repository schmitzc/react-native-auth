import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_Cdt1r1Q6utUQL4afg-vq530-S6mBOSA',
      authDomain: 'reactnative-auth-3fc74.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-3fc74.firebaseio.com',
      storageBucket: 'reactnative-auth-3fc74.appspot.com',
      messagingSenderId: '1084024094014'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
