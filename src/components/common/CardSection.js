import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative',
  },
};

export { CardSection };
