import React from 'react';
import { Dimensions, View, Image } from 'react-native';
const image = require('../../assets/default-maker.png');
const { width, height } = Image.resolveAssetSource(image);
const imgWidth = Dimensions.get('window').width * .15;
const imgHeight = height * (imgWidth / width)

const Marker = ({ top, left, width, height }) => (
    <View
        style={{
            height,
            width,
            backgroundColor: 'trasnparent',
            position: 'absolute',
            top,
            left,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <View
            style={{
                position: 'relative',
                top: - (imgHeight * .7),
            }}
        >
            
            <Image
                source={image}
                style={{ height: imgHeight, width: imgWidth }}
            />
        </View>
    </View>
);

export default Marker;
