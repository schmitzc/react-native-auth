import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.view}>
    <Text style={styles.text}>{props.headerText}</Text>
  </View>
);

const styles = {
  view: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  text: {
    fontSize: 20,
  },
};

export { Header };
