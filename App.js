import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Card from './components/card/';

export default function App() {
    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.imageBackground}>
            <View style={styles.container}>

                <Card/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    }
});
