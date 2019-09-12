import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { allMapItems } from '../../data/markers';

const findStandByNumber = (number) => {
    return allMapItems.find(item => item.name == number)
}

const EventItem = ({summary, location, description, start, end, id, navigation}) => {
    const standNumber = parseInt(location.replace('Stand ', ''));
    const isStandNumber = Number.isInteger(standNumber);
    let eventData = null;

    if (isStandNumber) {
        eventData = findStandByNumber(standNumber);
    }
    
    return (
        <View style={styles.boxStyle}>
            <Text style={{
                ...styles.boxTitle,
                ...styles.purpleText
            }}
            >{summary}</Text>
            <View style={styles.boxLocation}>
                <View style={styles.boxLocationName}>
                    <Text style={styles.purpleText}>
                        {isStandNumber ? `Estande ${standNumber}` : location}</Text>
                        {eventData && eventData.builder && (
                            <Text style={styles.purpleText}>{eventData.builder}</Text>
                        )}
                </View>
                <View style={styles.boxLocationName}>
                    <Text style={styles.purpleText}>{start}</Text>
                    <Text style={styles.purpleText}>{end}</Text>
                </View>
                <View>
                    {eventData && (
                        
                        <TouchableOpacity
                            style={styles.verNoMapa}
                            onPress={() => {
                                const { top, left, width, height, builder } = eventData;
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
                    )}
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
        color: '#fff',
        fontFamily: 'IsidoraSansAlt-Bold'
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

export default EventItem;
