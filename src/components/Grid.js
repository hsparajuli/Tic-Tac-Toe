import React from 'react';
import {StyleSheet, View} from 'react-native';

import GridElement from './GridElement';

const Grid = props => (
  <View style={styles.root}>
    {props.gridElements.map((element, index) => (
      <GridElement
        key={index}
        value={element.value}
        isFilled={element.isFilled}
        isWin={element.isWin}
        onPress={() => props.onGridElementPress(index)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
});

export default Grid;
