import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AsyncStorage, SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import ViewPark from "../../components/viewPark";
import Axios from "axios";
import {WaitTimesSerices} from "../../services/WaitTimesService";

const Park = ({page, setPage, favRides, setFavRides}) => {
    const [ridesPark, setRidesPark] = useState(null)
    const [ridesStudios, setRidesStudios] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get(WaitTimesSerices.GET_WAITTIMES_PARK)
                .then(response => {
                    setRidesPark(response.data["waitTimes"]);
                })
                .catch(error => {
                    Alert.alert(
                        "Aïe aïe aïe !",
                        error.message
                    )
                })
            await Axios.get(WaitTimesSerices.GET_WAITTIMES_STUDIOS)
                .then(response => {
                    setRidesStudios(response.data["waitTimes"]);
                })
                .catch(error => {
                    Alert.alert(
                        "Aïe aïe aïe !",
                        error.message
                    )
                })
        };

        fetchData();
    }, [])

    return (
        <View style={styles.rides}>
            <SafeAreaView style={styles.content}>
                {page === "parc" ? (
                    ridesPark ? (
                        <ViewPark setFavRides={setFavRides} rides={ridesPark} setPage={setPage}
                                  title="Parc Disneyland"/>
                    ) : (
                        <ActivityIndicator size="large" color="white"/>
                    )
                ) : page === "studios" ? (
                    ridesStudios ? (
                        <ViewPark setFavRides={setFavRides} rides={ridesStudios} setPage={setPage}
                                  title="Walt Disney Studio"/>
                    ) : (
                        <ActivityIndicator size="large" color="white"/>
                    )
                ) : (
                    <ViewPark setFavRides={setFavRides} rides={favRides} setPage={setPage} title="Vos favoris"/>
                )}
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    rides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginTop: 100
    }
})
export default Park;
