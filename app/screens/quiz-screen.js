//@flow

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import type {Node} from 'react';
import Header from '../components/header';
import Colors from '../common/color';
import Questions from '../common/questions';
import Question from '../components/question';
import Options from '../components/options';
import ScoreScreen from '../components/score-screen';
import Button from '../components/button';
import Divider from '../components/divider';
import QuizNumber from '../components/quizNumber';
import {shuffle} from '../common/Functions'

const QuizScreen = (): Node => {
  const [quizes, setQuizes] = useState(Questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);
  const [optionLoading, setOptionLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizScreen, setIsQuizScreen] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (optionLoading) {
      let incorrect_answers = Questions[currentQuestion].incorrect_answers;
      let correct_answer = Questions[currentQuestion].correct_answer;
      let mixed_options = [...incorrect_answers, correct_answer];
      setOptions(shuffle(mixed_options));
      setOptionLoading(false);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (loading) {
      setOptionLoading(true);
      setScore(0);
      setSelectedOption(null);
      setCurrentQuestion(0);
      setLoading(false);
    }
  }, [isQuizScreen]);

  // const shuffle = mixed_options => {
  //   return mixed_options
  //     ?.map(value => ({value, sort: Math.random()}))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({value}) => value);
  // };

  const handleSubmission = () => {
    selectedOption === Questions[currentQuestion].correct_answer &&
      setScore(score + 1);
    if (currentQuestion + 1 !== quizes.length) {
      setOptionLoading(true);
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizScreen(false);
    }
  };

  const checkSelection = option => {
    if (selectedOption) {
      if (option === selectedOption) {
        return true;
      } else return false;
    } else return false;
  };

  const onPressOption = option => {
    if (option != selectedOption) {
      setSelectedOption(option);
    } else {
      setSelectedOption(null);
    }
  };

  return isQuizScreen ? (
    <View style={Styles.container}>
      <Header />
      <QuizNumber
        style={Styles.quizNumberText}
        quizes={quizes}
        currentQuestionNumber={quizes[currentQuestion].id}
        totalQuizNumber={quizes?.length}
      />
      <Divider style={Styles.divider} />
      <Question data={quizes[currentQuestion]} />
      {
         options.map((item, index) => {
          let data = {option: item, questionNumber: index + 1}
          return (
            <Options
              data={data}
              selected={checkSelection(item)}
              onPress={option => onPressOption(option)}
            />
          )
        })
      }
      <Button
        title="Submit"
        onPress={handleSubmission}
        tilteStyle={Styles.submitText}
        style={Styles.submitButton}
      />
    </View>
  ) : (
    <ScoreScreen
      score={score}
      setIsQuizScreen={value => setIsQuizScreen(value)}
      setLoading={value => setLoading(value)}
    />
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: '100%',
  },
  quizNumberText: {
    color: 'white',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 21,
    marginHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 60,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
  },
  submitText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
});

export default QuizScreen;
