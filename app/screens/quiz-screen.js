//@flow
import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import type {Node} from 'react';
import Header from '../components/header';
import Colors from '../common/color';
import Questions from '../common/questions';
import Question from '../components/question';
import OptionButton from '../components/optionButton';
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

    let incorrect_answers = Questions[currentQuestion].incorrect_answers;
    let correct_answer = Questions[currentQuestion].correct_answer;
    let mixed_options = [...incorrect_answers, correct_answer];

    this.setState({options: shuffle(mixed_options)});
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

    if (optionLoading) {
      let incorrect_answers = Questions[currentQuestion].incorrect_answers;
      let correct_answer = Questions[currentQuestion].correct_answer;
      let mixed_options = [...incorrect_answers, correct_answer];
      this.setState({options: shuffle(mixed_options)});
      this.setState({optionLoading: false});
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

    if (selectedOption === Questions[currentQuestion].correct_answer) {
      this.setState({score: score + 1});
    }
    if (currentQuestion + 1 !== quizes.length) {
      this.setState({optionLoading: true});
      this.setState({selectedOption: ''});
      this.setState({currentQuestion: currentQuestion + 1});
    } else {
      this.setState({isQuizScreen: false});
    }
  };

  handleRetry: () => void = () => {
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

    this.setState({isQuizScreen: true, loading: true});
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
      handleRetry,
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
        <FlatList
          data={options}
          ListEmptyComponent={<Text>No data</Text>}
          renderItem={({item, index}) => (
            <View key={index}>
              <OptionButton
                option={item}
                questionNumber={index + 1}
                selected={checkSelection(item, selectedOption)}
                onPress={() => this.onPressOption(item)}
              />
            </View>
          )}
        />

        <Button
          title="Submit"
          onPress={() => handleSubmission()}
          tilteStyle={Styles.submitText}
          style={Styles.submitButton}
        />
      </View>
    ) : (
      <ScoreScreen score={score} handleRetry={() => handleRetry()} />
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
