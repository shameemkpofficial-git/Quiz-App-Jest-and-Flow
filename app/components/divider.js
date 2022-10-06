// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import type {Node} from 'react';
import type {DividerTypes} from '../common/type';

const Divider = ({style}: DividerTypes): Node => {
  return <View style={style} />;
};

export default Divider;
