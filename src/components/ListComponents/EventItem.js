import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { allMapItems } from '../../data/markers';

const findStandByName = (name) => {
    return allMapItems.find(item => item.name == name)
}

const minTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const minutes = minTwoDigits(date.getMinutes());
    const hour = minTwoDigits(date.getHours());

    return hour + ':' + minutes + 'h';
}

const isStand = (locationName) => {
    return locationName.includes('Stand ');
}

const getStandName = (locationName) => {
    try {
        locationName = locationName.trim().replace(/\s\s+/g, ' ');
        locationsArray = locationName.split(' ');
        if (locationsArray && locationsArray[1]) {
            return locationsArray[1]
        }    
    } catch (e) {}

    return null;
}

const EventItem = ({summary, location, description, start, end, id, navigation}) => {
    const eventData = isStand(location) ? findStandByName(getStandName(location)) : null;

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row'
            }}>
                <View
                    style={styles.boxInfo}
                >
                    <Text style={{
                        ...styles.purpleText,
                        ...styles.boxTitle
                    }}
                    >
                        {summary}
                    </Text>

                    <View style={styles.boxLocation}>
                        <View style={styles.boxLocationName}>
                            <Text style={styles.purpleText}>
                                {eventData && eventData.builder && (
                                    <Text style={styles.purpleText}>{eventData.builder + " - "}</Text>
                                )}
        
                                {isStand(location) ? `Estande ${getStandName(location)}` : location}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxTime}>
                    <Text style={styles.verNoMapaText}>{formatDate(start)}</Text>
                    <Text style={styles.timeSeparator}>-</Text>
                    <Text style={styles.verNoMapaText}>{formatDate(end)}</Text>
                </View>
            </View>
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
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 5
    },
    boxLocationName: {
        width: '80%'
    },
    verNoMapa: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#752bff',
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    verNoMapaText: {
        color: '#fff',
        fontFamily: 'IsidoraSansAlt-Bold'
    },
    timeSeparator: {
        color: '#fff',
        fontFamily: 'IsidoraSansAlt-Bold',
    },
    boxTitle: {
        fontFamily: 'IsidoraSansAlt-Bold',
        paddingVertical: 5,
        fontWeight: "bold",
        fontSize: 14
    },
    purpleText: {
        fontFamily: 'IsidoraSansAlt-Bold',
        color: '#666',
        fontSize: 12
    },
    boxInfo: {
        flexDirection: 'column',
        width: '70%'
    },
    boxTime: {
        fontFamily: 'IsidoraSansAlt-Bold',
        textAlign: "center",
        fontSize: 14,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        width: '30%',
        paddingVertical: 5
    },
    timeText: {
        fontFamily: 'IsidoraSansAlt-Bold',
        color: '#666',
        textAlign: "center"
    },
});

export default EventItem;
