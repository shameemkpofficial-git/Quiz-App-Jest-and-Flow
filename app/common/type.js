//@flow

import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

type ScoreType = {|
  score?: number ,
  handleRetry?: function,
|};

type QuizNumberType = {|
  style?: TextStyleProp,
  quizes?: Array<any>,
  currentQuestionNumber?: number,
  totalQuizNumber?: number,
|};

type QuestionType = {|
  data?: Object,
|};

type OptionTypes = {|
  questionNumber?:number,
  option?:string,
  selected?: boolean,
  onPress?: function,
  key?:number,
|};

type DividerTypes = {|
  style?: ViewStyleProp,
|};

type ButtonTypes = {|
  title?: string,
  tilteStyle?: TextStyleProp,
  onPress?: () => Promise<void> | void,
  style?: ViewStyleProp,
|};

type OptionsTypes = {|
  options?:Array<any>,
  checkSelection?:function,
  onPressOption?:function
  |}

export type {
  ScoreType,
  QuizNumberType,
  QuestionType,
  OptionTypes,
  DividerTypes,
  ButtonTypes,
  OptionsTypes
};
