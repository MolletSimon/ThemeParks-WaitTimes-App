import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, AsyncStorage, Alert, ActivityIndicator} from "react-native";
import WaitTime from '../../components/waitTimes';
import Picto from '../../components/picto';
import FadeInView from '../../components/fadeinview';
import MapView, { Marker } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

const Ride = ({setPage}) => {
    const [ride, setRide] = useState(null);
    const [mapView, setMapView] = useState(false);
    const [latUser, setLatUser] = useState(null);
    const [lonUser, setLonUser] = useState(null);

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

    const handleClickMap = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatUser(position.coords.latitude);
                setLonUser(position.coords.longitude);
            }
        )
        setMapView(true);
    }

    if(mapView && ride && latUser && lonUser) {
        return (
            <View style={StyleSheet.absoluteFillObject}>
            
            <MapView style ={StyleSheet.absoluteFillObject} 
                    mapType="satellite"
                    initialRegion={{
                        latitude: ride.meta.latitude,
                        longitude: ride.meta.longitude,
                        latitudeDelta: 0.0017,
                        longitudeDelta: 0.0017,
                    }}>
                <TouchableOpacity onPress={handleClickBack}>
                    <Image style={styles.image} source={{uri: 'https://img.icons8.com/cotton/64/000000/circled-left-2.png'}}></Image>
                </TouchableOpacity>
                <Marker
                    coordinate={{
                        latitude: ride.meta.latitude,
                        longitude: ride.meta.longitude
                    }}
                    title={ride.name}
                    image={require('../../assets/images/marker.png')}
                />
                <Marker
                    coordinate={{
                        latitude: latUser,
                        longitude: lonUser
                    }}
                    title="You"
                    image={require('../../assets/images/you.png')}
                />
            </MapView>
            <View style={{ position: 'absolute', top: 100, left: 50 }}/>
          </View>
        )
    }

    return(
        <View style={styles.rideView}>
            <TouchableOpacity onPress={handleClickBack}>
                <Image style={styles.image} source={{uri: 'https://img.icons8.com/dotty/80/000000/circled-left-2.png'}}></Image>
            </TouchableOpacity>

            { ride ? (
                <FadeInView style={styles.card}>
                <View style={styles.firstRow}>
                    <TouchableOpacity onPress={handleClickMap}>
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
        marginLeft: 20,
        height: 60,
        width: 60
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
        backgroundColor: '#C4C4C4',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
})
export default Ride;
