import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    AsyncStorage,
    Alert,
    ActivityIndicator,
    Modal,
    Dimensions
} from "react-native";
import WaitTime from '../../components/waitTimes';
import Picto from '../../components/picto';
import FadeInView from '../../components/fadeinview';
import MapView, { Marker } from 'react-native-maps';
import {LineChart} from "react-native-chart-kit";
navigator.geolocation = require('@react-native-community/geolocation');

const Ride = ({setPage}) => {
    const [ride, setRide] = useState(null);
    const [mapView, setMapView] = useState(false);
    const [latUser, setLatUser] = useState(null);
    const [lonUser, setLonUser] = useState(null);
    const [modalChart, setModalChart] = useState(false);

    const handleClickBack = () => {
        setPage("parc");
    }

    const handleClickChart = () => {
        setModalChart(true);
    }

    // get selected ride
    useEffect(() => {
        const getRide = async () => {
            AsyncStorage.getItem("selectedRide")
                .then(ride => {
                    setRide(JSON.parse(ride));
                    console.log(ride);
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
                    <Image style={styles.image} source={{uri: 'https://img.icons8.com/cotton/64/000000/circled-left-2.png'}}/>
                </TouchableOpacity>
                <Marker
                    coordinate={{
                        latitude: ride.meta.latitude,
                        longitude: ride.meta.longitude
                    }}
                    title={ride.name}
                    // image={require('../../assets/images/marker.png')}
                />
                <Marker
                    coordinate={{
                        latitude: latUser,
                        longitude: lonUser
                    }}
                    title="You"
                    // image={require('../../assets/images/you.png')}
                />
            </MapView>
            <View style={{ position: 'absolute', top: 100, left: 50 }}/>
          </View>
        )
    }

    return(
        <View style={styles.rideView}>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalChart}
                >
                <View style={styles.modal}>
                    {/*<LineChart*/}
                    {/*    data={{*/}
                    {/*        labels: ["8:00", "10:00", "12:00","15:00", "18:00", "21:00"],*/}
                    {/*        datasets: [*/}
                    {/*            {*/}
                    {/*                data: [*/}
                    {/*                    5,*/}
                    {/*                    15,*/}
                    {/*                    25,*/}
                    {/*                    40,*/}
                    {/*                    35,*/}
                    {/*                    30,*/}
                    {/*                    25,*/}
                    {/*                    30,*/}
                    {/*                    35*/}
                    {/*                ],*/}
                    {/*            }*/}
                    {/*        ]*/}
                    {/*    }}*/}
                    {/*    fromZero={true}*/}
                    {/*    withInnerLines={false}*/}
                    {/*    yAxisInterval="10"*/}
                    {/*    withDots={false}*/}
                    {/*    width={Dimensions.get("window").width * 0.9}*/}
                    {/*    height={300}*/}
                    {/*    chartConfig={{*/}
                    {/*        backgroundColor: "#4d5dac",*/}
                    {/*        backgroundGradientFrom: "#4d5dac",*/}
                    {/*        backgroundGradientTo: "#264aff",*/}
                    {/*        decimalPlaces: 0, // optional, defaults to 2dp*/}
                    {/*        color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,*/}
                    {/*        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,*/}
                    {/*        style: {*/}
                    {/*            borderRadius: 16*/}
                    {/*        },*/}
                    {/*        propsForDots: {*/}
                    {/*            r: "6",*/}
                    {/*            strokeWidth: "2",*/}
                    {/*            stroke: "white"*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    bezier*/}
                    {/*    style={styles.chart}*/}
                    {/*/>*/}
                    <Text>WIP</Text>
                    <TouchableOpacity onPress={() => setModalChart(false)} style={styles.closeButton}>
                        <Text style={{fontFamily: 'Regular'}}>Fermer</Text>
                    </TouchableOpacity>
                </View>
            </Modal>




            <TouchableOpacity onPress={handleClickBack}>
                <Image style={styles.image} source={{uri: 'https://img.icons8.com/dotty/80/000000/circled-left-2.png'}} />
            </TouchableOpacity>

            { ride ? (
                <FadeInView style={styles.card}>
                <View style={styles.firstRow}>
                    <TouchableOpacity onPress={handleClickMap}>
                        <Image style={{marginTop:40}} source={require('../../assets/images/map.png')} />
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
                        <WaitTime style={[styles.waitTime, styles.closed]} waitTime="Fermée" ridePage={true}/>
                    )}

                    <TouchableOpacity onPress={handleClickChart}>
                        <Image style={{marginTop:40}} source={require('../../assets/images/graph.png')} />
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
    closeButton: {
        fontFamily: 'Regular',
        padding: 20,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#A52020',
        backgroundColor: '#E9A2AD',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
        padding: 25
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'black',

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
