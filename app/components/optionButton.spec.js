// @flow
import React from 'react';
import {Component} from 'react';
import OptionButton from './optionButton';
import ShallowRenderer from 'react-test-renderer/shallow';
import {findWithType, findAllWithType} from 'react-shallow-testutils';
import type {OptionTypes} from '../common/type';
import {TouchableOpacity} from 'react-native';

let renderer = new ShallowRenderer();

const renderButton = () => {
  renderer.render(<OptionButton selected={true} />);
  return renderer.getRenderOutput();
};
describe('src/component/options', () => {
  test('should render correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });

  test('should press option button', () => {
    const result = renderButton();
    const btn = findWithType(result, TouchableOpacity);
    btn.props.onPress;
  });
});
