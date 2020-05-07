import React, {useEffect, useState} from 'react';
import {AsyncStorage, SafeAreaView, StyleSheet, View} from 'react-native';
import ViewPark from "../../components/viewPark";

const Park = ({page, setPage, favRides, setFavRides}) => {
    const ridesPark = [
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
        {
            name: "Star Tours",
            waitTime: 40
        },
        {
            name: "Pirates of Carribean",
            waitTime: 5
        },
        {
            name: "Autopia",
            waitTime: 45
        }
    ];
    const ridesStudios = [
        {
            name: "Hollywood Tower Hotel",
            waitTime: 40
        },
        {
            name: "Armagedoon",
            waitTime: 10
        },
        {
            name: "Crush Coaster's",
            waitTime: 130
        },
        {
            name: "Cars",
            waitTime: 25
        },
    ];

    return (
        <View style={styles.rides}>
            <SafeAreaView style={styles.content}>
                {page === "parc" ? (
                    <ViewPark setFavRides={setFavRides} rides={ridesPark} setPage={setPage} title="Parc Disneyland"/>
                ) : page === "studios" ? (
                    <ViewPark setFavRides={setFavRides} rides={ridesStudios} setPage={setPage} title="Walt Disney Studio"/>
                ) : (
                    <ViewPark setFavRides={setFavRides} rides={favRides} setPage={setPage} title="Vos favoris"/>
                )}
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    rides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginTop: 100
    }
})
export default Park;
