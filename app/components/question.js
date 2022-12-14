// @flow

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import Colors from '../common/color';
import type {QuestionType} from '../common/type';

const Question = ({data}: QuestionType): Node => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.questionText}>
        {' '}
        {data?.id}.{data?.question}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  questionText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
  },
});

export default Question;
