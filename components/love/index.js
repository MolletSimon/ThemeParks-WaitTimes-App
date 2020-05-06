import React, {useState} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View, Image, AsyncStorage} from 'react-native';

const LoveButton = ({ride}) => {

    const [isLoved, setIsLoved] = useState(false);

    const handleClick = () => {
        setIsLoved(!isLoved);

        // set fav with AsyncStorage
        AsyncStorage.getItem("fav").then(favs => {
            //if object does not exist, create it
            if (!JSON.parse(favs)) {
                const favorites = {
                    rides: []
                };
                favorites.rides.push(ride);
                AsyncStorage.setItem("fav", JSON.stringify(favorites)).then(() => console.log('OK'));
            } else {
                //objects favs exist, does the item in array exist ?
                const fav = {...JSON.parse(favs)};
                let exist = false;
                fav.rides.forEach(oldRide => {
                    if (oldRide.name === ride.name) {
                        //item in array exist, delete it
                        exist = true;
                        const newArray = fav.rides.filter(ride => ride.name !== oldRide.name)
                        const newFav = {
                            rides: newArray
                        }
                        // was it the only item in array ?
                        if (newArray.length === 0) {
                            // it was, clear all
                            clearStorage();
                        } else {
                            //it wasn't, just push the new array
                            AsyncStorage.removeItem("fav").then(() => {
                                AsyncStorage.setItem("fav", JSON.stringify(newFav)).then(() => console.log('Element supprimés'));
                            });
                        }
                    }
                });

                if (!exist) {
                    //the item in the array does not exist, add it
                    fav.rides.push(ride);
                    AsyncStorage.removeItem("fav").then(() => {
                        AsyncStorage.setItem("fav", JSON.stringify(fav)).then(() => console.log('OK AGAIN'));
                    })

                }
            }
        })

    }

    const clearStorage = () => {
        AsyncStorage.getItem("fav").then(item => {
            if (!item) {
                console.log('already clear');
            } else {
                AsyncStorage.clear().then(() => console.log('Storage Clear'));
            }
        });

    }

    const handleTest = () => {
        AsyncStorage.getItem("fav").then(item => console.log(JSON.parse(item)));
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
