import React, {useState} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const LoveButton = () => {

    const [isLoved, setIsLoved] = useState(false);

    const handleClick = () => {
        setIsLoved(!isLoved);
    }
    return(

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
