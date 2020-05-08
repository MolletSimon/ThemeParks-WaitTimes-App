import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Picto = ({image, text, ride}) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.item}>
                    {ride.fastPass ? (
                        <>
                        <View style={[styles.circle, styles.green]}>
                            <Image source={require('../../assets/images/fastpassOK.png')} />
                        </View>
                        <Text style={[styles.text, styles.textGreen]}>FastPass disponible</Text>
                        </>
                    ): (
                        <>
                        <View style={[styles.circle, styles.red]}>
                            <Image source={require('../../assets/images/fastpassNOK.png')} />
                        </View>
                        <Text style={[styles.text, styles.textRed]}>Pas de fastpass</Text>
                        </>
                    )}
                </View>
                <View style={styles.item}> 
                    {ride.meta.singleRider ? (
                        <>
                            <View style={[styles.circle, styles.green]}>
                                <Image source={require('../../assets/images/singleriderOK.png')} />
                            </View>
                            <Text style={[styles.text, styles.textGreen]}>Single Rider disponible : 0min</Text>
                        </>
                    ) : (
                        <>
                            <View style={[styles.circle, styles.red]}>
                                <Image source={require('../../assets/images/singleriderNOK.png')} />
                            </View>
                            <Text style={[styles.text, styles.textRed]}>Pas de single rider</Text>
                        </>
                    )}
                </View> 
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    {ride.meta.photoPass ? (
                        <>
                            <View style={[styles.circle, styles.green]}>
                                <Image source={require('../../assets/images/photopassOK.png')} />
                            </View>
                            <Text style={[styles.text, styles.textGreen]}>PhotoPass disponible</Text>
                        </>
                    ) : (
                        <>
                            <View style={[styles.circle, styles.red]}>
                                <Image source={require('../../assets/images/photopassNOK.png')} />
                            </View>
                            <Text style={[styles.text, styles.textRed]}>Pas de PhotoPass</Text>
                        </>
                    )}
                    
                </View>
                <View style={styles.item}>   
                    <View style={[styles.circle, styles.closed]}>
                        <Image source={require('../../assets/images/closed.png')} />
                    </View>
                    <Text style={[styles.text, styles.textClosed]}>Fermée</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1
    },
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
        fontFamily: 'Italic',
        textAlign: 'center',
        paddingBottom: 15
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
    },
    textClosed: {
        color: '#393939'
    },
    closed: {
        borderColor: '#393939',
        backgroundColor: '#C4C4C4',
    }
})
export default Picto;