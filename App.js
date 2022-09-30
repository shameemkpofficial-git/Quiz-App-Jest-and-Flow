// @flow


import React, { useState } from "react";
import { Text, View } from "react-native";
import type {Node} from 'react';

type PropTypes ={
    
}

const App =({}: PropTypes): Node =>{

    const [ name , setName] = useState('favaz')

    return(
        <View>
            <Text>
               Hi {name}
            </Text>
        </View>
    )
}

export default App