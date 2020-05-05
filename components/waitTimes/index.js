import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WaitTime = () => {
    return(
        <View style={style.waitTime}>
            <Text>15min</Text>
        </View>
    )
}

const style = StyleSheet.create({
    waitTime: {
        borderWidth: 2
    }
})

export default WaitTime;
