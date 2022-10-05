// @flow

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';

type PropTypes = {|
  mixed_options: Array<any>,
|};

const shuffle = ({mixed_options}: PropTypes):Node => {
  return mixed_options
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};

export {shuffle};