// @flow

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';



const shuffle = (mixed_options:Array<any>) : Array<any> => {
  return mixed_options
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};

const checkSelection = (item:string,selectedOption:string):boolean => {
  if(item && selectedOption){
      if (item === selectedOption) {
        return true;
      } else return false;
    } else return false;
};

export {shuffle,checkSelection};