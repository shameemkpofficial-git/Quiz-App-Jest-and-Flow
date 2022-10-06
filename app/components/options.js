// @flow

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import type {Node} from 'react';
import Colors from '../common/color';
import OptionButton from '../components/optionButton';
import type {OptionTypes} from '../common/type';

const Options = ({data, selected, onPress}: OptionTypes): Node => {
  return (
    <OptionButton
      style={[Styles.container, selected && {backgroundColor: 'orange'}]}
      onPress={() => onPress(data.option)}
      data={data}
      tilteStyle={Styles.questionText}
      questionNumberStyle={[selected && Styles.questionNumberStyle]}
    />
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: Colors.secondaryColor,
    height: '7%',
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
});

export default Options;
