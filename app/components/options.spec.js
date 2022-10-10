// @flow
import React from 'react';
import {Component} from 'react';
import Options from './options';
import ShallowRenderer from 'react-test-renderer/shallow';
import {findWithType, findAllWithType} from 'react-shallow-testutils';

let renderer = new ShallowRenderer();

describe('src/component/options', () => {
  const renderButton = () => {
    renderer.render(<Options />);
    return renderer.getRenderOutput();
  };

  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });

  test('should press a  button', () => {

    const result = renderButton();

    const OptionBtn = findWithType(result, Options);
    // console.log('OptionButton',OptionButton)
    OptionBtn.props.onPress();

    console.log('result', result);

  });

});