import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaitTime from '../waitTimes';
import * as Font from 'expo-font';

const Card = ({rideName, waitTime}) => {

    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount = async () => {
        await Font.loadAsync({
            'Acme': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();
    })

    if (!isFontLoaded) {
        return <Text>Chargement...</Text>
    }

    return (
        parseInt(waitTime) < 15 ? (
            <View style={[style.card, style.green]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        ) : parseInt(waitTime) < 30 ? (
            <View style={[style.card, style.yellow]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        ) : (
            <View style={[style.card, style.red]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        )
    )

};

const style = StyleSheet.create({
    card: {
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    ride: {
        marginLeft: 20,
        marginRight: 70,
        fontSize: 25,
        marginTop: 12,
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'Acme'
    },
    green: {
        backgroundColor: 'rgba(41,219,120,0.47)'
    },
    yellow: {
        backgroundColor: 'rgba(255,213,52,0.6)'
    },
    red: {
        backgroundColor: 'rgba(248,22,51,0.55)'
    }
})

export default Card;
