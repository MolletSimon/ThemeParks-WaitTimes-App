import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../components/card/';
import Title from "../../components/title";
import * as Font from "expo-font";
import Footer from "../../components/footer";

const Park = ({page, setPage}) => {
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
    ]

    return(
        <View style={styles.rides}>
            <SafeAreaView style={styles.content}>
                {page === "parc" ? (
                    <View>
                        <Title title="Parc Disneyland"/>
                        <ScrollView>
                            {ridesPark && ridesPark.length > 0 && ridesPark.map(ride => (
                                <View key={ride.name}>
                                    <Card waitTime={ride.waitTime} rideName={ride.name}/>
                                </View>
                            ))}
                        </ScrollView>
                        <Footer page={page} setPage={setPage}/>
                    </View>
                ) : (
                    <View>
                        <Title title="Studios"/>
                        <ScrollView>
                            {ridesStudios && ridesStudios.length > 0 && ridesStudios.map(ride => (
                                <View key={ride.name}>
                                    <Card waitTime={ride.waitTime} rideName={ride.name}/>
                                </View>
                            ))}
                        </ScrollView>
                        <Footer page={page} setPage={setPage}/>
                    </View>
                    )}
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    rides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(77,129,177,0.8)'
    },
    content: {
        marginTop: 100
    }
})
export default Park;
