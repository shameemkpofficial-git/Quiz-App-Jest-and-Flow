// @flow


import React, { useState } from "react";
import { Text, View } from "react-native";
import type {Node} from 'react';

type PropTypes ={
    
}

const ScoreScreen =({}: PropTypes): Node =>{

    const [ name , setName] = useState('favaz')

    return(
        <View>
            <Text>
               Hi {name}, This is quiz screen
            </Text>
        </View>
    )
}

export default ScoreScreen