import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Picto = ({image, text, ride}) => {
    return(
        <View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <View style={[styles.circle, styles.red]}>
                        <Image source={require('../../assets/images/fastpassNOK.png')} />
                    </View>
                    <Text style={[styles.text, styles.textRed]}>Pas de fastpass</Text>
                </View>
                <View style={styles.item}>   
                    <View style={[styles.circle, styles.green]}>
                        <Image source={require('../../assets/images/singleriderOK.png')} />
                    </View>
                    <Text style={[styles.text, styles.textGreen]}>10min</Text>
                </View> 
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <View style={[styles.circle, styles.green]}>
                        <Image source={require('../../assets/images/photopassOK.png')} />
                    </View>
                    <Text style={[styles.text, styles.textGreen]}>PhotoPass disponible</Text>
                </View>
                <View style={styles.item}>   
                    <View style={[styles.circle, styles.yellow]}>
                        <Image source={require('../../assets/images/chantier.png')} />
                    </View>
                    <Text style={[styles.text, styles.textYellow]}>Travaux</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    circle: {
        borderWidth: 2,
        padding: 50,
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        width: '40%',
        alignItems: 'center',
    },
    red: {
        borderColor: '#A52020',
        backgroundColor: '#E9A2AD',
    },
    green: {
        borderColor: '#237A6B',
        backgroundColor: '#8DD7CF',
    },
    yellow: {
        borderColor: '#E8833A',
        backgroundColor: '#FBE192',
    },
    textRed: {
        color: '#A52020'
    },
    textGreen: {
        color: '#237A6B'
    }, 
    textYellow: {
        color:'#E8833A'
    }
})
export default Picto;