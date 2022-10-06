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
import type {QuizNumberType} from '../common/type';

const QuizNumber = ({
  style,
  quizes,
  currentQuestionNumber,
  totalQuizNumber,
}: QuizNumberType): Node => {
  return (
    <Text style={style}>
      Quiz : {currentQuestionNumber} / {totalQuizNumber}
    </Text>
  );
};

export default QuizNumber;
