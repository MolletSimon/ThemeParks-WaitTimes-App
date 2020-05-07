import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AsyncStorage, SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import ViewPark from "../../components/viewPark";


const Park = ({page, setPage, rides}) => {
    
    return (
        <View style={styles.rides}>
            <SafeAreaView style={styles.content}>
                {page === "parc" ? (
                    rides ? (
                        <ViewPark rides={rides} setPage={setPage}
                                  title="Parc Disneyland" />
                    ) : (
                        <ActivityIndicator size="large" color="white"/>
                    )
                ) : page === "studios" ? (
                    rides ? (
                        <ViewPark rides={rides} setPage={setPage}
                                  title="Walt Disney Studio" />
                    ) : (
                        <ActivityIndicator size="large" color="white"/>
                    )
                ) : (
                    <ViewPark rides={rides} setPage={setPage} title="Vos favoris"/>
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
