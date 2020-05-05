import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Card from './components/card/';

export default function App() {
    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.imageBackground}>
            <View style={styles.rides}>
                <Card rideName="Big Thunder Mountain" waitTime="120"/>
                <Card rideName="Alice's Curious Labyrinth" waitTime="5"/>
                <Card rideName="Hyperspace Mountain" waitTime="40"/>
                <Card rideName="Buzz Lightyear" waitTime="25"/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    rides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(77,129,177,0.8)',
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    }
});
