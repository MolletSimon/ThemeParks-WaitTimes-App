import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './components/card/';
import Title from "./components/title";
import * as Font from "expo-font";
import Footer from "./components/footer";

export default function App() {
    const rides = [
        {
            name: "Big Thunder Mountain",
            waitTime: 120
        },
        {
            name: "Alice's Curious Labyrinth",
            waitTime: 5
        },
        {
            name: "Hyperspace Mountain",
            waitTime: 40
        },
        {
            name: "Buzz Lightyear",
            waitTime: 25
        },
    ]
    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.imageBackground}>
            <View style={styles.rides}>
                <SafeAreaView style={styles.content}>
                <Title title="Parc Disneyland"/>
                <ScrollView>
                    {rides && rides.length > 0 && rides.map(ride => (
                        <View key={ride.name}>
                            <Card waitTime={ride.waitTime} rideName={ride.name}/>
                        </View>
                    ))}
                </ScrollView>
                <Footer/>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    rides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(77,129,177,0.8)'
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    },
    content: {
        marginTop: 100
    }
});
