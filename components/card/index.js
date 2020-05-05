import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaitTime from '../waitTimes';

const Card = () => {
    return(
        <View style={style.card}>
            <WaitTime/>
            <Text>Textcddc</Text>
        </View>
    )
};

const style = StyleSheet.create({
    card: {
        borderWidth: 2,
        padding: 30,
        borderRadius: 50,
        width: '80%',
        flexDirection: 'row',
        backgroundColor: '#8dd7a2'
    }
})

export default Card;
