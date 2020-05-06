import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";

const Ride = ({setPage}) => {

    const handleClickBack = () => {
        setPage("parc");
    }

    return(
        <View style={styles.rideView}>
            <TouchableOpacity onPress={handleClickBack}>
                <Text>BACK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Ride;
