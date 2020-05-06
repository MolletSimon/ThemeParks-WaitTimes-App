import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Footer = ({setPage, page}) => {

    const handleClickPark = () => {
         setPage("parc");
    };

    const handleClickStudios = () => {
        setPage("studios")
    }
    return(
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={handleClickPark}>
                <Text>Park</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClickStudios}>
                <Text>Studios</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: -40,
        height: 70,
        justifyContent: 'space-evenly'
    },
    button: {
        width: '50%',
        marginTop: 20,
        alignItems: 'center',
    }
})

export default Footer;
