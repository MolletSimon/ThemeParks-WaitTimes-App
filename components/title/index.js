import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const Title = ({title}) => {
    return(
        <Text style={style.title}>{title}</Text>
    )
};

const style = StyleSheet.create({
    title: {
        fontFamily: 'Regular',
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        textAlign: 'center'
    }
})
export default Title;
