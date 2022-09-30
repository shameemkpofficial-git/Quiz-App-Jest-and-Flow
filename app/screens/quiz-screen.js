// @flow

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import Header from '../components/header';
import Colors from '../common/color';
import Questions from '../common/questions';
import Question from '../components/question';

type PropTypes = {};

const QuizScreen = ({}: PropTypes): Node => {
  const [quizes, setQuizes] = useState(Questions);

  const RenderQuestions = () => {
    return quizes.map((item, index) => {
      return <Question />;
    });
  };

  return (
    <View style={Styles.container}>
      <Header />
      <RenderQuestions />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: '100%',
  },
});

export default QuizScreen;
