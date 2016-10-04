import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => (
  <View style={styles.container}>
    {children}
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
  }
};

export { CardSection };
