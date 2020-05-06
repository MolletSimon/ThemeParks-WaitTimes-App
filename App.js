import React, { useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Image, Alert, Text, View} from 'react-native';

import Footer from "./components/footer";
import Park from "./screen/park";
import {BlurView} from "@react-native-community/blur";
import Swiper from 'react-native-swiper'

const App = () => {
    const [page, setPage] = useState("parc")

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.imageBackground}>
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />
            <Swiper style={styles.wrapper} loop={false} paginationStyle={styles.pagination}>
                <View style={styles.slide}>
                    <Park page="parc" setPage={setPage}/>
                </View>
                <View style={styles.slide}>
                    <Park page="studios" setPage={setPage}/>
                </View>
            </Swiper>

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
    pagination: {

    }
});

export default App;
