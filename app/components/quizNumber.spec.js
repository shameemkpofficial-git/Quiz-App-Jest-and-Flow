// @flow
import React from 'react';
import {Component} from 'react';
import QuizNumber from './quizNumber';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/quizNumber', () => {
  const renderButton = () => {
    renderer.render(<QuizNumber />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });
});
