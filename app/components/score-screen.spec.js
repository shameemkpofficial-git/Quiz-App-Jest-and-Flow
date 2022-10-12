// @flow
import React from 'react';
import {Component} from 'react';
import ScoreScreen from './score-screen';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/scoreScreen', () => {
  const renderButton = (score) => {
    renderer.render(<ScoreScreen score={score} />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton(4);
    expect(result).toMatchSnapshot();
  });

  test('should render correctly', () => {
    const result = renderButton(1);
    expect(result).toMatchSnapshot();
  });
 
});