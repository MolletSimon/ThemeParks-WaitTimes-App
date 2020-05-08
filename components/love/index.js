import React, {useState} from "react";
import Axios from 'axios';
import {Button, StyleSheet, Text, TouchableOpacity, View, Image, AsyncStorage} from 'react-native';
import { WaitTimesSerices } from "../../services/WaitTimesService";
import { getUniqueId } from "react-native-device-info";

const LoveButton = ({ride, isLoved, setIsLoved}) => {

    const handleClick = async () => {
        setIsLoved(!isLoved);

        //check if already favorite
        if (ride.isLoved) {
            ride.isLoved = false;
            Axios.delete(`${WaitTimesSerices.DELETE_FAVRIDE}/${ride.idFav}`)
        } else {
            ride.isLoved = true;
            Axios.post(WaitTimesSerices.ADD_FAVRIDES, {ride: ride, user: getUniqueId()});
        }
    }

    return(

        <View>
        <TouchableOpacity onPress={handleClick}>
            {ride.isLoved ? (
                <Image
                    source={require('../../assets/images/icon-loved.png')}
                    style={styles.icon}
                />
            ) : (
                <Image
                    source={require('../../assets/images/icon-unloved.png')}
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
