// @flow
import React from 'react';
import {Component} from 'react';
import Divider from './divider';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/divider', () => {
  const renderButton = () => {
    renderer.render(<Divider />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });
});