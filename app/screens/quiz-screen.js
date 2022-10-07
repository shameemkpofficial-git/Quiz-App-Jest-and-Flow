//@flow
import React, {Component, useEffect, useState} from 'react';
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
import {shuffle, checkSelection} from '../common/Functions';

type PropsType = {||};

type StateType = {
  quizes: Array<any>,
  currentQuestion: number,
  options: Array<any>,
  optionLoading: boolean,
  selectedOption: string,
  score: number,
  isQuizScreen: boolean,
  loading: boolean,
};

class QuizScreen extends Component<PropsType, StateType> {
  
  state: StateType = {
    quizes: Questions,
    currentQuestion: 0,
    options: [],
    optionLoading: true,
    selectedOption: '',
    score: 0,
    isQuizScreen: true,
    loading: false,
  };

  componentDidMount() {

    const {
      state: {
        quizes,
        currentQuestion,
        options,
        optionLoading,
        selectedOption,
        score,
        isQuizScreen,
        loading,
      },
      handleSubmission,
      onPressOption,
    } = this;

    if (optionLoading) {
      let incorrect_answers = Questions[currentQuestion].incorrect_answers;
      let correct_answer = Questions[currentQuestion].correct_answer;
      let mixed_options = [...incorrect_answers, correct_answer];

      this.setState({options: shuffle(mixed_options)});
      this.setState({optionLoading: false});
    }

    if (loading) {
      this.setState({optionLoading: true});
      this.setState({score: 0});
      this.setState({selectedOption: ''});
      this.setState({currentQuestion: 0});
      this.setState({loading: false});
    }
  }

  componentDidUpdate(prevState: Object) {

    const {
      state: {
        quizes,
        currentQuestion,
        options,
        optionLoading,
        selectedOption,
        score,
        isQuizScreen,
        loading,
      },
      handleSubmission,
      onPressOption,
    } = this;

    if (prevState.currentQuestion !== currentQuestion) {
      if (optionLoading) {
        let incorrect_answers = Questions[currentQuestion].incorrect_answers;
        let correct_answer = Questions[currentQuestion].correct_answer;
        let mixed_options = [...incorrect_answers, correct_answer];
        this.setState({options: shuffle(mixed_options)});
        this.setState({optionLoading: false});
      }
    }

    if (prevState.isQuizScreen !== isQuizScreen) {
      if (loading) {
        this.setState({optionLoading: true});
        this.setState({score: 0});
        this.setState({selectedOption: ''});
        this.setState({currentQuestion: 0});
        this.setState({loading: false});
      }
    }
  }

  handleSubmission: () => void = () => {

    const {
      state: {
        quizes,
        currentQuestion,
        options,
        optionLoading,
        selectedOption,
        score,
        isQuizScreen,
        loading,
      },
      handleSubmission,
      onPressOption,
    } = this;

    selectedOption === Questions[currentQuestion].correct_answer &&
      this.setState({score: score + 1});
    if (currentQuestion + 1 !== quizes.length) {
      this.setState({optionLoading: true});
      this.setState({selectedOption: ''});
      this.setState({currentQuestion: currentQuestion + 1});
    } else {
      this.setState({isQuizScreen: false});
    }
  };

  onPressOption: (option: string) => void = (option: string) => {

    const {
      state: {
        quizes,
        currentQuestion,
        options,
        optionLoading,
        selectedOption,
        score,
        isQuizScreen,
        loading,
      },
      handleSubmission,
      onPressOption,
    } = this;

    if (option != selectedOption) {
      this.setState({selectedOption: option});
    } else {
      this.setState({selectedOption: ''});
    }
  };

  render(): Node {

    const {
      state: {
        quizes,
        currentQuestion,
        options,
        optionLoading,
        selectedOption,
        score,
        isQuizScreen,
        loading,
      },
      handleSubmission,
      onPressOption,
    } = this;

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
        {options.map((item, index) => {
          let data = {option: item, questionNumber: index + 1};
          return (
            <View key={index}>
            <Options
              data={data}
              selected={checkSelection(item, selectedOption)}
              onPress={option => this.onPressOption(option)}
            />
            </View>
          );
        })}
        <Button
          title="Submit"
          onPress={() => handleSubmission()}
          tilteStyle={Styles.submitText}
          style={Styles.submitButton}
        />
      </View>
    ) : (
      <ScoreScreen
        score={score}
        setIsQuizScreen={value => this.setState({isQuizScreen: value})}
        setLoading={value => this.setState({loading: value})}
      />
    );
  }
}

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
