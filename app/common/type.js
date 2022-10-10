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
  questionNumber?:number,
  option?:string,
  selected?: boolean,
  onPress?: () => Promise<void> | void,
  key?:number
|};

// type OptionButtonTypes = {|
//   // data?: Object,
//   questionNumber?:number,
//   option?: string,
//   tilteStyle?: TextStyleProp,
//   onPress?: () => Promise<void> | void,
//   style?: ViewStyleProp,
//   questionNumberStyle?: ViewStyleProp,
//   key?:number
// |};

type DividerTypes = {|
  style?: ViewStyleProp,
|};

type ButtonTypes = {|
  title?: string,
  tilteStyle?: TextStyleProp,
  onPress?: () => Promise<void> | void,
  style?: ViewStyleProp,
|};

export type {
  ScoreType,
  QuizNumberType,
  QuestionType,
  OptionTypes,
  DividerTypes,
  ButtonTypes,
};
