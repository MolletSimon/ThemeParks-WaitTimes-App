import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const Title = ({title}) => {
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount = async () => {
        await Font.loadAsync({
            'Acme': require('../../assets/fonts/Cabin-Medium.ttf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();
    })

    if (!isFontLoaded) {
        return <Text>Chargement...</Text>
    }

    return(
        <Text style={style.title}>{title}</Text>
    )
};

const style = StyleSheet.create({
    title: {
        fontFamily: 'Acme',
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        textAlign: 'center'
    }
})
export default Title;
