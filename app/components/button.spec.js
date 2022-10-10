// @flow
import React from 'react';
import {Component} from 'react';
import Button from './button';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/button', () => {
  const renderButton = () => {
    renderer.render(<Button />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });
});