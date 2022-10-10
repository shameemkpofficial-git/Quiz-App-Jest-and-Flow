// @flow
import React from 'react';
import {Component} from 'react';
import Header from './header';
import ShallowRenderer from 'react-test-renderer/shallow';

let renderer = new ShallowRenderer();

describe('src/component/header', () => {
  const renderButton = () => {
    renderer.render(<Header />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });
});