import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Font from "expo-font";

const Footer = ({setPage, page}) => {

    const [isFontLoaded, setIsFontLoaded] = useState(false);

    const componentDidMount = async () => {
        await Font.loadAsync({
            'Cabin': require('../../assets/fonts/Cabin-Medium.ttf')
        });
        setIsFontLoaded(true);
    }

    useEffect(() => {
        componentDidMount();
    })

    if (!isFontLoaded) {
        return <Text>Chargement...</Text>
    }

    const handleClickPark = () => {
         setPage("parc");
    };

    const handleClickStudios = () => {
        setPage("studios")
    }
    return(
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={handleClickPark}>
                <Text style={styles.label}>Park</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClickStudios}>
                <Text style={styles.label}>Studios</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        backgroundColor: 'rgba(77,129,177,0.39)',
        marginBottom: -40,
        height: 80,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10
    },
    button: {
        width: '50%',
        marginTop: 20,
        alignItems: 'center',

        height: '100%'
    },
    label: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Cabin'
    }
})

export default Footer;
