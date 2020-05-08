import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, AsyncStorage, Alert, ActivityIndicator} from "react-native";
import WaitTime from '../../components/waitTimes';
import Picto from '../../components/picto';
import FadeInView from '../../components/fadeinview';

const Ride = ({setPage}) => {
    const [ride, setRide] = useState(null);

    const handleClickBack = () => {
        setPage("parc");
    }

    // get selected ride
    useEffect(() => {
        const getRide = async () => {
            AsyncStorage.getItem("selectedRide")
                .then(ride => {
                    setRide(JSON.parse(ride));
                    AsyncStorage.removeItem("selectedRide");
                })
                .catch(error => {
                    Alert.alert(
                        "aie aie aie..",
                        "Une erreur est survenue"
                    )
                })
        }
        getRide();
    }, []);

    return(
        <View style={styles.rideView}>
            <TouchableOpacity onPress={handleClickBack}>
                <Image style={styles.image} source={require('../../assets/images/icons8-flèche-gauche-64.png')}></Image>
            </TouchableOpacity>

            { ride ? (
                <FadeInView style={styles.card}>
                <View style={styles.firstRow}>
                    <TouchableOpacity>
                        <Image style={{marginTop:40}} source={require('../../assets/images/map.png')}></Image>
                    </TouchableOpacity>
                    {ride.active ? (
                        parseInt(ride.waitTime) < 20 ? (
                            <WaitTime style={[styles.waitTime, styles.green]} waitTime={`${ride.waitTime}min`} ridePage={true}/>
                        ) : parseInt(ride.waitTime) < 40 ? (
                            <WaitTime style={[styles.waitTime, styles.yellow]} waitTime={`${ride.waitTime}min`} ridePage={true}/>
                        ) : (
                            <WaitTime style={[styles.waitTime, styles.red]} waitTime={`${ride.waitTime}min`} ridePage={true}/>
                        )
                    ) : (
                        <WaitTime style={[styles.waitTime, styles.closed]} waitTime={`Fermée`} ridePage={true}/>
                    )}
                    
                    <TouchableOpacity>
                        <Image style={{marginTop:40}} source={require('../../assets/images/graph.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.rideName}>{ride.name}</Text>
                <Picto ride={ride}/>
            </FadeInView>
            ) : (
                <ActivityIndicator size="large" color="white" />
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    rideView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    firstRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        marginTop: 50,
        marginLeft: 20
    },
    card: {
        flex: 0.93,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: '10%',
        marginRight: '10%',
        display: 'flex',
        alignItems: 'center',

    },
    rideName: {
        marginTop: 20,
        padding: 7,
        paddingTop: 20,
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Bold-Condensed',
        borderWidth: 2,
        width: '101%'
    },
    waitTime: {
        borderWidth: 2,
        padding: 20,
        borderRadius: 100,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    red: {
        borderColor: '#A52020',
        backgroundColor: '#E9A2AD',
    },
    green: {
        borderColor: '#237A6B',
        backgroundColor: '#8DD7CF',
    },
    yellow: {
        borderColor: '#E8833A',
        backgroundColor: '#FBE192',
    },
    closed: {
        borderColor: '#393939',
        backgroundColor: '#717171',
    }
})
export default Ride;
