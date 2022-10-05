// @flow

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import type {Node} from 'react';
import Colors from '../common/color';
import OptionButton from '../components/optionButton';

type PropTypes = {|
  data: Object,
  selected: boolean,
  onPress: function,
|};

const Options = ({data, selected, onPress}: PropTypes): Node => {
  return (
    <OptionButton
      style={[Styles.container, selected && {backgroundColor: 'orange'}]}
      onPress={() => onPress(data.option)}
      data={data}
      tilteStyle={Styles.questionText}
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
});

export default Options;
