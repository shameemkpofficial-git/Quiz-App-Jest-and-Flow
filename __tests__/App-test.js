/**
 * @format
 */

import 'react-native';
import React from 'react';
import QuizScreen from '../app/screens/quiz-screen';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<QuizScreen />);
});
