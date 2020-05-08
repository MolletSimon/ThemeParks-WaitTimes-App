import React, { useEffect, useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Image,
    View,
    AsyncStorage,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as Font from "expo-font";
import Park from "./screen/park";
import Ride from "./screen/ride";
import {BlurView} from "@react-native-community/blur";
import Swiper from 'react-native-swiper';
import Axios from "axios";
import {WaitTimesSerices} from "./services/WaitTimesService";
import {NetworkInfo} from 'react-native-network-info';
import { getUniqueId } from 'react-native-device-info';

const App = () => {
    const [page, setPage] = useState("parc");
    const [ridesPark, setRidesPark] = useState(null);
    const [ridesStudios, setRidesStudios] = useState(null);
    const [favRides, setFavRides] = useState(null);

    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount = async () => {
        await Font.loadAsync({
            'Regular': require('./assets/fonts/AvenirNextLTPro-Regular.otf'),
            'Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
            'Bold-Condensed': require('./assets/fonts/AvenirNextLTPro-BoldCn.otf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
            //get fav rides
            await Axios.get(`${WaitTimesSerices.GET_FAVRIDES}/${getUniqueId()}`)
            .then(response => {
                let favRides = [];
                response.data["favRides"].forEach(favRide => {
                    const ride = {...favRide.ride};
                    ride.idFav = favRide._id;
                    ride.isLoved = true;
                    favRides.push(ride);
                });
                setFavRides(favRides);



                //get data park
                Axios.get(WaitTimesSerices.GET_WAITTIMES_PARK)
                    .then(response => {
                        let ridesPark = [];
                        response.data["waitTimes"].forEach(ridePark => {
                            const newRide = {...ridePark};

                            // check if ride in favride
                            favRides.forEach(favRide => {
                                if (favRide.id === newRide.id) {
                                    newRide.idFav = favRide.idFav;
                                    newRide.isLoved = true;
                                }
                            })
                            ridesPark.push(newRide);
                        });
                        setRidesPark(ridesPark);
                    })
                    .catch(error => {
                        Alert.alert(
                            "Aïe aïe aïe !",
                            error.message
                        )
                    })
            })
            .catch(err => {
                Alert.alert(
                    "Oups..",
                    err.message
                )
            })
        };
        fetchData();
    }, [handleIndexChange])

    const handleIndexChange = async (index) => {
        if (index === 1 && favRides && !ridesStudios) {
            await Axios.get(WaitTimesSerices.GET_WAITTIMES_STUDIOS)
                .then(response => {
                    let ridesStudios = [];
                        response.data["waitTimes"].forEach(rideStudio => {
                            const newRide = {...rideStudio};

                            // check if ride in favride
                            favRides.forEach(favRide => {
                                if (favRide.id === newRide.id) {
                                    newRide.idFav = favRide.idFav;
                                    newRide.isLoved = true;
                                }
                            })
                            ridesStudios.push(newRide);
                        });
                    setRidesStudios(ridesStudios);
                })
                .catch(error => {
                    Alert.alert(
                        "Aïe aïe aïe !",
                        error.message
                    )
                })
        } else if (index === 2) {
            Axios.get(`${WaitTimesSerices.GET_FAVRIDES}/${getUniqueId()}`).then(response => {
                let favRides = [];
                response.data["favRides"].forEach(favRide => {
                    const ride = {...favRide.ride};
                    ride.idFav = favRide._id;
                    ride.isLoved = true;
                    favRides.push(ride);
                });
                setFavRides(favRides);
            })
            .catch(err => {
                Alert.alert(
                    "ERREUR",
                    err.message
                )
            })
        }
    }

    if (!isFontLoaded) {
        return <ActivityIndicator size="large" color="white" />
    }

    return (
        <ImageBackground source={require('./assets/background2.jpg')} style={styles.imageBackground}>
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={8}
                reducedTransparencyFallbackColor="white"
            />
            {page === "ride" ? (
                <Ride setPage={setPage}/>
            ) : (
                <Swiper style={styles.wrapper}
                        loop={false}
                        activeDot={
                            <Image source={require('./assets/images/icon-active-dot.png')} style={styles.activeDot}/>
                        }
                        paginationStyle={styles.pagination}
                        bounces={true}
                        onIndexChanged={handleIndexChange}
                >
                    <View style={styles.slide}>
                        <Park page="parc" setPage={setPage} rides={ridesPark} favRides={favRides}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="studios" setPage={setPage} rides={ridesStudios} favRides={favRides}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="fav" setPage={setPage} rides={favRides} favRides={favRides}/>
                    </View>
                </Swiper>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: null,
        height: null
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeDot: {
        backgroundColor: 'white',
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    pagination: {
        backgroundColor: 'rgba(78,78,78,0.72)',
        width: '15%',
        padding: 3,
        borderRadius: 20,
        marginLeft: '43%',
        marginRight: '43%'
    }
});

export default App;
