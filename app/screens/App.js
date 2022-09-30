// @flow


import React, { useState } from "react";
import { Text, View } from "react-native";
import type {Node} from 'react';
import QuizScreen from './quiz-screen'
import ScoreScreen from './score-screen'

type PropTypes ={
    
}

const App =({}: PropTypes): Node =>{

    const [ name , setName] = useState('favaz')

    return(
        <View>
           <QuizScreen />
           {/* <ScoreScreen /> */}
        </View>
    )
}

export default App