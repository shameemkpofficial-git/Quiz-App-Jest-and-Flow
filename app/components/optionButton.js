// @flow

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import type {Node} from 'react';
import Colors from '../common/color';
import type {OptionTypes} from '../common/type';

const OptionButton = ({
  option,
  questionNumber,
  selected,
  onPress,
}: OptionTypes): Node => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Styles.container, selected && {backgroundColor: 'orange'}]}>
      <View
        style={[
          Styles.questionNumberContainer,
          selected && Styles.questionNumberStyle,
        ]}>
        <Text style={Styles.questionText}>{`${+questionNumber}`}</Text>
      </View>
      <Text style={Styles.questionText}>{option}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: Colors.secondaryColor,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  questionNumberStyle: {
    backgroundColor: 'cyan',
    borderColor: 'yellow',
    borderWidth: 1,
  },
  questionNumberContainer: {
    height: 45,
    width: 45,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default OptionButton;
