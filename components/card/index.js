import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaitTime from '../waitTimes';

const Card = ({rideName, waitTime}) => {
    if(parseInt(waitTime) < 15) {
        return(
            <View style={[style.card, style.green]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        )
    } else if (parseInt(waitTime) < 30) {
        return(
            <View style={[style.card, style.yellow]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        )
    } else {
        return(
            <View style={[style.card, style.red]}>
                <WaitTime waitTime={waitTime}/>
                <Text style={style.ride}>{rideName}</Text>
            </View>
        )
    }

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
        padding: 15,
        borderRadius: 30,
        width: '90%',
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    ride: {
        marginLeft: 20,
        fontSize: 20,
        fontStyle: 'italic',
        color: 'white'
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
