import React, {useCallback, useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WaitTime from '../waitTimes';
import * as Font from 'expo-font';
import LoveButton from "../love";

const Card = ({ride, setPage, setFavRides}) => {
    const [isLoved, setIsLoved] = useState(false);
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount = async () => {
        await Font.loadAsync({
            'Acme': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();

        // get rides loved
        AsyncStorage.getItem("fav").then(favs => {
            if (favs) {
                const favRides = (JSON.parse(favs)).rides;
                favRides.forEach(favRide => {
                    if (favRide.name === ride.name) {
                        // favorite
                        setIsLoved(true);
                    }
                })
            }
        })
    })

    if (!isFontLoaded) {
        return <Text>Chargement...</Text>
    }

    const handleClick = () => {
        setPage("ride");
    }

    return (
        ride.active ? (
            parseInt(ride.waitTime) < 15 ? (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.green]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} setFavRides={setFavRides}/>
                    </View>
                </TouchableOpacity>
            ) : parseInt(ride.waitTime) < 30 ? (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.yellow]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} setFavRides={setFavRides}/>
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleClick}>
                    <View style={[style.card, style.red]}>
                        <WaitTime waitTime={ride.waitTime}/>
                        <Text style={style.ride}>{ride.name}</Text>
                        <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} setFavRides={setFavRides}/>
                    </View>
                </TouchableOpacity>
            )
        ) : (
            <TouchableOpacity onPress={handleClick}>
                <View style={[style.card, style.grey]}>
                    <WaitTime waitTime=""/>
                    <Text style={style.ride}>{ride.name}</Text>
                    <LoveButton isLoved={isLoved} setIsLoved={setIsLoved} ride={ride} setFavRides={setFavRides}/>
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
    },
    grey: {
        backgroundColor: 'grey'
    }
})

export default Card;
