// @flow


import React, { useState } from "react";
import { Text, View,StyleSheet } from "react-native";
import type {Node} from 'react';
import Colors from "../common/color";

type PropTypes ={
    
}

const Header =({}: PropTypes): Node =>{

    return(
        <View style={Styles.container}>
            <Text style={Styles.headerTextStyle}>QUIZ APP</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        width: '100%',
        height:70,
        backgroundColor: Colors.headerColor,
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    headerTextStyle:{
        fontSize:24,
        fontWeight:'bold'
    }
})

export default Header