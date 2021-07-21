import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colors} from '../utils/constants';

const GridElement = props => {
  // Condition for background color of each element based
  const backgroundColor = props.isWin ? colors.win : 'transparent';

  return (
    <TouchableOpacity
      style={[styles.root, {backgroundColor}]}
      disabled={props.isFilled}
      onPress={props.onPress}>
      <Text style={styles.value}>{props.value}</Text>
    </TouchableOpacity>
  );
};

// CSS
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  value: {
    color: colors.text,
    fontSize: 40,
  },
});

export default GridElement;
