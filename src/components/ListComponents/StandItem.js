import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


const StandItem = ({ title, standNumber, top, left, width, height, builder, navigation }) => {
    return (
        <View style={styles.boxStyle}>
            <Text style={{ 
                ...styles.boxTitle,
                ...styles.purpleText
            }}
            >{title}</Text>
            <View style={styles.boxLocation}>
                <View style={styles.boxLocationName}>
                    <Text style={styles.purpleText}>
                        {Number.isInteger(standNumber) ? `Estande ${standNumber}` : standNumber}</Text>
                    <Text style={styles.purpleText}>{builder}</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.verNoMapa}
                        onPress={() => {
                            const route = builder === 'Bloco A' ? 'BlocoA' : 'Ginasio';
                            navigation.navigate(route, { 
                                defaultMakerPosition: { 
                                    top,
                                    left,
                                    width,
                                    height
                                }
                            });
                        }}
                    >
                        <Text style={styles.verNoMapaText}>Ver no mapa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 5
    },
    boxLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxLocationName: {
        justifyContent: 'space-around',
    },
    verNoMapa: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#752bff',
        borderRadius: 5
    },
    verNoMapaText: {
        fontFamily: 'IsidoraSansAlt-Bold',
        color: '#fff'
    },
    boxTitle: {
        fontFamily: 'IsidoraSansAlt-Bold',
        paddingVertical: 5,
        fontWeight: "bold",
    },
    purpleText: {
        fontFamily: 'IsidoraSansAlt-Bold',
        color: '#666'
    }
});

export default StandItem;
