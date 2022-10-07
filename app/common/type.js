//@flow

import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

type ScoreType = {|
  score: number,
  setIsQuizScreen: function,
  setLoading: function,
|};

type QuizNumberType = {|
  style: TextStyleProp,
  quizes: Array<any>,
  currentQuestionNumber: number,
  totalQuizNumber: number,
|};

type QuestionType = {|
  data: Object,
|};

type OptionTypes = {|
  data: Object,
  selected: boolean,
  onPress: function,
  key:number
|};

type OptionButtonTypes = {|
  data: Object,
  tilteStyle?: TextStyleProp,
  onPress?: () => Promise<void> | void,
  style?: ViewStyleProp,
  questionNumberStyle?: ViewStyleProp,
  key:number
|};

type DividerTypes = {|
  style?: ViewStyleProp,
|};

type ButtonTypes = {|
  title: string,
  tilteStyle?: TextStyleProp,
  onPress?: () => Promise<void> | void,
  style?: ViewStyleProp,
|};

export type {
  ScoreType,
  QuizNumberType,
  QuestionType,
  OptionTypes,
  OptionButtonTypes,
  DividerTypes,
  ButtonTypes,
};
