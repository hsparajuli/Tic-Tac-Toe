import React from 'react';
import {StyleSheet, View} from 'react-native';

import LandingPage from './screens/LandingPage';
import {colors} from './utils/constants';

const App = () => (
  <View style={styles.root}>
    <LandingPage />
  </View>
);

// CSS
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
});

export default App;
