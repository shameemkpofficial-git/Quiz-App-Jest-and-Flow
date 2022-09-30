// @flow


import React, { useState } from "react";
import { Text, View,StyleSheet } from "react-native";
import type {Node} from 'react';
import Colors from "../common/color";


type PropTypes ={|
    
    |}

const Question =({}: PropTypes): Node =>{

    return(
        <View >
          <Text style={{color:'white'}}> 1. This is the demo question</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
   
})

export default Question