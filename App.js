import React, { useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Alert, Text, View} from 'react-native';

import Footer from "./components/footer";
import Park from "./screen/park";

const App = () => {
    const [page, setPage] = useState("parc")

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={styles.imageBackground}>
            <Park page={page} setPage={setPage}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
    }
});

export default App;
