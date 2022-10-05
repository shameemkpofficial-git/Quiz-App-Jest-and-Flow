// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import type {Node} from 'react';

import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

type PropsType = {|
  data: Object,
  tilteStyle?: TextStyleProp,
  onPress?: () => Promise<void> | void,
  style?: ViewStyleProp,
|};

const OptionButton = ({data, tilteStyle, onPress, style}: PropsType): Node => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text
        style={[styles.title, tilteStyle]}>{`${data.questionNumber}. `}</Text>
      <Text style={[styles.title, tilteStyle]}>{`${data.option}. `}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
  },
  title: {
    color: 'white',
  },
});
