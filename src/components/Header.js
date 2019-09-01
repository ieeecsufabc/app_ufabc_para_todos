import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.text }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        position: 'relative',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { widht: 0, height: 2 },
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
