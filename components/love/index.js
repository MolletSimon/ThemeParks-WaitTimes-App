import React, {useState} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View, Image, AsyncStorage} from 'react-native';

const LoveButton = ({ride, setFavRides, isLoved, setIsLoved}) => {

    const handleClick = async () => {

        setIsLoved(!isLoved);

        // // set fav with AsyncStorage
        // AsyncStorage.getItem("fav").then(favs => {
        //     //if object does not exist, create it
        //     if (!JSON.parse(favs)) {
        //         const favorites = {
        //             rides: []
        //         };
        //         favorites.rides.push(ride);
        //         createItemPromise = AsyncStorage.setItem("fav", JSON.stringify(favorites)).then(() => 'OK');
        //     } else {
        //         //objects favs exist, does the item in array exist ?
        //         const fav = {...JSON.parse(favs)};
        //         let exist = false;
        //         fav.rides.forEach(oldRide => {
        //             if (oldRide.name === ride.name) {
        //                 //item in array exist, delete it
        //                 setIsLoved(false);
        //                 exist = true;
        //                 const newArray = fav.rides.filter(ride => ride.name !== oldRide.name)
        //                 const newFav = {
        //                     rides: newArray
        //                 }
        //                 // was it the only item in array ?
        //                 if (newArray.length === 0) {
        //                     // it was, clear all
        //                     clearStoragePromise = AsyncStorage.removeItem("fav").then(() => 'ClearStorage')
        //                 } else {
        //                     //it wasn't, just push the new array
        //                     removeOldObjectPromise = AsyncStorage.removeItem("fav").then(() => {
        //                         newObjectPromise = AsyncStorage.setItem("fav", JSON.stringify(newFav)).then(() => 'Element supprimés');
        //                     });
        //                 }
        //             }
        //         });

        //         if (!exist) {
        //             //the item in the array does not exist, add it
        //             fav.rides.push(ride);
        //             removeOldItemPromise = AsyncStorage.removeItem("fav").then(() => {
        //                 newItemPromise = AsyncStorage.setItem("fav", JSON.stringify(fav)).then(() => 'OK AGAIN');
        //             })

        //         }
        //     }

        //     Promise.all([clearStoragePromise, createItemPromise, newItemPromise, removeOldObjectPromise, newObjectPromise, removeOldItemPromise]).then(() => {
        //         //set page
        //         AsyncStorage.getItem("fav").then(favorites => {
        //             if (favorites) {
        //                 const favRides = (JSON.parse(favorites)).rides;
        //                 favRides.forEach(favRide => {
        //                     if (favRide.name === ride.name) {
        //                         // favorite
        //                         setIsLoved(true);
        //                     } else {
        //                         setIsLoved(false);
        //                     }
        //                 })
        //                 setFavRides(favRides);
        //             } else {
        //                 setFavRides(null);
        //             }
        //         })

        //     })
        // })

    }

    return(

        <View>
        <TouchableOpacity onPress={handleClick}>
            {isLoved ? (
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
