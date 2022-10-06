//@flow

import 'react-native';
import React from 'react';
import QuizScreen from './quiz-screen';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

const renderApp = () => {
  renderer.render(<QuizScreen />);
  return renderer.getRenderOutput();
};

describe('QuizScreen', () => {
  test('renders correctly', () => {
    const result = renderApp();
    console.log('result',result)
    expect(result).toMatchSnapshot();
  });
});
