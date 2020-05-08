import React, {useCallback, useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert} from 'react-native';
import WaitTime from '../waitTimes';
import * as Font from 'expo-font';
import LoveButton from "../love";

const Card = ({ride, setPage, favRides}) => {
    const [isLoved, setIsLoved] = useState(false);

    const handleClick = () => {
        AsyncStorage.setItem("selectedRide", JSON.stringify(ride))
            .then(() => {
                setPage("ride");
            })
            .catch(error => {
                Alert.alert(
                    "Oups..",
                    `Une erreur est survenue lors de l'ouverture des infos de ${ride.name}`
                )
            });
        
    }

    return (
        ride.active ? (
            parseInt(ride.waitTime) < 20 ? (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.green]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} favRides={favRides} />
                    </View>
                </TouchableOpacity>
            ) : parseInt(ride.waitTime) < 40 ? (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.yellow]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} favRides={favRides} />
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.red]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} favRides={favRides} />
                    </View>
                </TouchableOpacity>
            )
        ) : (
            <TouchableOpacity onPress={handleClick}>
                <View style={[style.card, style.grey]}>
                    <WaitTime waitTime=""/>
                    <Text style={style.ride}>{ride.name}</Text>
                    <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride}/>
                </View>
            </TouchableOpacity>
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
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    ride: {
        marginLeft: 17,
        width: '58%',
        fontSize: 20,
        marginTop: 12,
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'Regular'
    },
    green: {
        backgroundColor: 'rgba(41,219,120,0.47)'
    },
    yellow: {
        backgroundColor: 'rgba(255,213,52,0.6)'
    },
    red: {
        backgroundColor: 'rgba(248,22,51,0.55)'
    },
    grey: {
        backgroundColor: 'grey'
    }
})

export default Card;
