import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, ActivityIndicator, AsyncStorage, Alert, SafeAreaView} from "react-native";
import WaitTime from '../../components/waitTimes';
import Title from '../../components/title';
// import * as Font from 'expo-font';
import Picto from '../../components/picto';
import Font from '../../components/font';

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
            {/* {ride ? (
                <Text style={styles.rideName}>Autopia</Text>
            ) : (
                <ActivityIndicator size="large" color="white" />
            )} */}
            <View style= {styles.card}>
                <WaitTime style={styles.waitTime} waitTime="120min" ridePage={true}/>
                <Text style={styles.rideName}>Big Thunder Mountain</Text>
                <Picto />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rideView: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    image: {
        marginTop: 50,
        marginLeft: 20
    },
    card: {
        flex: 0.9,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: '10%',
        marginRight: '10%',
        display: 'flex',
        alignItems: 'center'
    },
    rideName: {
        marginTop: 35,
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Bold'
    },
    waitTime: {
        borderWidth: 2,
        padding: 20,
        borderRadius: 100,
        borderColor: '#A52020',
        backgroundColor: '#E9A2AD',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    }
})
export default Ride;
