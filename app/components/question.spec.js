// @flow
import React from 'react';
import {Component} from 'react';
import Question from './question';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/question', () => {
  const renderButton = () => {
    renderer.render(<Question />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });
});
