import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import {Icon} from 'react-native-elements';

const Footer = ({actualTab}) => {
    return(
        actualTab === "parc" ? (
            <View>
                <Text style={style.highlight}>Parc</Text>
                <Text>Studio</Text>
            </View>
        ) : (
            <View>
                <Text>Parc</Text>
                <Text style={style.highlight}>Studio</Text>
            </View>
        )

    )
};

const style = StyleSheet.create({
    highlight: {
        color: 'white'
    }
})

export default Footer;
