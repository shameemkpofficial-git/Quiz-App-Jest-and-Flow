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
import type {OptionButtonTypes} from '../common/type';

const OptionButton = ({
  data,
  tilteStyle,
  onPress,
  style,
  questionNumberStyle,
  key
}: OptionButtonTypes): Node => {
  return (
    <TouchableOpacity key={key} onPress={onPress} style={[styles.button, style]}>
      <View style={[styles.questionNumberContainer,questionNumberStyle]}>
      <Text
        style={[styles.title, tilteStyle]}>{`${data.questionNumber}`}</Text>
      </View>
      <Text style={[styles.title, tilteStyle]}>{` ${data.option} `}</Text>
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
  questionNumberContainer:{
    height:45,
    width:45,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  }
});
