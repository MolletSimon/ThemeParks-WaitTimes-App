import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from "expo-font";

const WaitTime = ({waitTime}) => {

    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount =async () => {
        await Font.loadAsync({
            'Acme': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();
    }, [])

    if (!isFontLoaded) {
        return <ActivityIndicator size="large" color="white"/>
    }

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
        marginTop: 12,
        color: 'white',
        fontFamily: 'Acme'
    }
})

export default WaitTime;
