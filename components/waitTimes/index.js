import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WaitTime = ({waitTime}) => {
    return(
        <View style={style.waitTime}>
            <Text style={style.text}>{waitTime}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    waitTime: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 100,
        borderColor: 'white',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default WaitTime;
