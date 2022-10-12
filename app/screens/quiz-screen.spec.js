//@flow

import {FlatList} from 'react-native';
import React from 'react';
import QuizScreen from './quiz-screen';
import ShallowRenderer from 'react-test-renderer/shallow';
import OptionButton from '../components/optionButton';
import {findAllWithType, findWithType} from 'react-shallow-testutils';
import Button from '../components/button';
import ScoreScreen from '../components/score-screen';

const renderer = new ShallowRenderer();

describe('Should render correctly', () => {
  const renderApp = () => {
    renderer.render(<QuizScreen />);
    return renderer.getRenderOutput();
  };
  test('componentDidMount', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.componentDidMount();
  });

  test('componentDidUpdate when loading true', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({loading: true});
    instance.componentDidUpdate({isQuizScreen: false});
  });

  test('componentDidUpdate when optionLoading true', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({currentQuestion: 4});
    instance.componentDidUpdate({optionLoading: true});
  });

  test('componentDidUpdate when optionLoading false', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({currentQuestion: 4});
    instance.componentDidUpdate({optionLoading: false});
  });

  test('componentDidUpdate when previous screen is equal to current screen', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({isQuizScreen: true});
    instance.componentDidUpdate({isQuizScreen: true});
  });

  test('handlesubmission  if selectedOption is equal to current questions correct answer', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({selectedOption: 'Seven', currentQuestion: 1});

    instance.handleSubmission();
  });

  test('handlesubmission  if selectedOption is not equal to current questions correct answer', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({currentQuestion: 0, selectedOption: 'Seven'});

    instance.handleSubmission();
  });

  test('handlesubmission  if the questions has finished', () => {
    renderApp();
    const instance = renderer.getMountedInstance();
    instance.setState({currentQuestion: 4});

    instance.handleSubmission();
  });

  test('handleRetry', () => {
    renderApp();
    const instance = renderer.getMountedInstance();

    instance.handleRetry();
  });

  test('onPressOption when selected option is equal ', () => {
    renderApp();
    const instance = renderer.getMountedInstance();

    instance.onPressOption();
  });

  test('onPressOption when selected option is not equal ', () => {
    renderApp();
    const instance = renderer.getMountedInstance();

    instance.setState({selectedOption: 'even'});
    instance.onPressOption('even');
  });

  test('should press submit button', () => {
    const result = renderApp();
    const submitbtn = findWithType(result, Button);
    submitbtn.props.onPress();
  });

  test('should press a retry button', () => {
    const result = renderApp();

    const retrybtn = findWithType(result, ScoreScreen);

    retrybtn.props.handleRetry();
  });

  it('renders a flatlist with data', () => {
    const mockDataOptions = [
      {
        id: 'id-1',
        name: 'Todo-1',
      },
      {
        id: 'id-2',
        name: 'Todo-2',
      },
      {
        id: 'id-3',
        name: 'Todo-3',
      },
    ];

    const result = renderApp();
    const flatlist = findWithType(result, FlatList);
    const renderItem = flatlist.props.renderItem;
    const renderItemResult = renderItem({
      item: mockDataOptions[0],
      index: 0,
    });
    renderItemResult.props.children.props.onPress();
    console.log(
      'renderItemResult.props.onPress',
      renderItemResult.props.children.props.onPress,
    );
  });
});
