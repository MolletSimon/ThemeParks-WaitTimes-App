import React, { useEffect, useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Image,
    View
} from 'react-native';

import Park from "./screen/park";
import Ride from "./screen/ride";
import {BlurView} from "@react-native-community/blur";
import Swiper from 'react-native-swiper';
import Axios from "axios";
import {WaitTimesSerices} from "./services/WaitTimesService";
import {NetworkInfo} from 'react-native-network-info';

const App = () => {
    const [page, setPage] = useState("parc");
    const [ridesPark, setRidesPark] = useState(null);
    const [ridesStudios, setRidesStudios] = useState(null);
    const [favRides, setFavRides] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log('APPEL API')
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
        };

        fetchData();
    }, [handleIndexChange])

    const handleIndexChange = async (index) => {
        if (index === 1) {
            if (!ridesStudios) {
                console.log('Appel API');
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
            }
        } else if (index === 2) {
            NetworkInfo.getIPAddress().then(ipAddress => {
                console.log(ipAddress);
              });
        }
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
                            <Image source={{uri: 'https://img.icons8.com/nolan/64/disney-movies-.png'}} style={styles.activeDot}/>
                        }
                        paginationStyle={styles.pagination}
                        bounces={true}
                        onIndexChanged={handleIndexChange}
                >
                    <View style={styles.slide}>
                        <Park page="parc" setPage={setPage} rides={ridesPark}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="studios" setPage={setPage} rides={ridesStudios}/>
                    </View>
                    <View style={styles.slide}>
                        <Park page="fav" setPage={setPage} rides={favRides}/>
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
