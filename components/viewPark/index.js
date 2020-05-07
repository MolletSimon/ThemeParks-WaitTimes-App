import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Title from "../title";
import Card from "../card";
import FadeInView from "../fadeinview";

const ViewPark = ({rides, setPage, title, favRides}) => {
    return(
        <FadeInView>
            <ScrollView>
                <Title title={title}/>
                {rides && rides.length > 0 && rides.map(ride => (
                    <View key={ride.name}>
                        <Card setPage={setPage} ride={ride}/>
                    </View>
                ))}
            </ScrollView>
        </FadeInView>
    )
};

const styles = StyleSheet.create({

})
export default ViewPark;
