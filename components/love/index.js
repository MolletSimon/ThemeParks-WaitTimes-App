import React, {useState} from "react";
import Axios from 'axios';
import {Button, StyleSheet, Text, TouchableOpacity, View, Image, AsyncStorage} from 'react-native';
import { WaitTimesSerices } from "../../services/WaitTimesService";
import { getUniqueId } from "react-native-device-info";

const LoveButton = ({ride, isLoved, setIsLoved, favRides}) => {

    const handleClick = async () => {
        setIsLoved(!isLoved);

        //check if already favorite
        console.log(favRides);
        Axios.post(WaitTimesSerices.ADD_FAVRIDES, {ride: ride, user: getUniqueId()});
    }

    return(

        <View>
        <TouchableOpacity onPress={handleClick}>
            {ride.isLoved ? (
                <Image
                    source={{uri: 'https://img.icons8.com/ios-filled/100/000000/love-circled.png'}}
                    style={styles.icon}
                />
            ) : (
                <Image
                    source={{uri: 'https://img.icons8.com/ios/100/000000/love-circled.png'}}
                    style={styles.icon}
                />
            )}

        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 3,
        height: 40,
        width: 40
    }
});

export default LoveButton;
