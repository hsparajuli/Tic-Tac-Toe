import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, status} from '../utils/constants';

const StatusBar = props => {
  let text = '';

  console.log(props.player);
  // Modify status bar text according to the status
  switch (props.gameState) {
    case status.START:
      text = `First Move`;
      break;

    case status.PLAYING:
      text = `Next Player ${props.player}`;
      break;

    case status.WIN:
      text = `Winner is ${props.player}`;
      break;

    case status.DRAW:
      text = `Draw`;
      break;
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  root: {
    padding: 15,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 20,
  },
});

export default StatusBar;
