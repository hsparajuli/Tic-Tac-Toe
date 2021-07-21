import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, REPLAY} from '../utils/constants';

const Button = props => (
  <TouchableOpacity style={styles.root} onPress={props.onClick}>
    <Text style={styles.text}>{REPLAY}</Text>
  </TouchableOpacity>
);

// CSS
const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    color: colors.text,
    fontWeight: 'bold',
  },
});

export default Button;
