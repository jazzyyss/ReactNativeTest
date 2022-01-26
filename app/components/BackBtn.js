import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackBtn = _ => {
    return (
        <Ionicons style={{
            position: 'absolute',
            top: 10,
            left: 10
        }} name="arrow-back-circle-sharp" size={30} color="black" />
    );
}

export default BackBtn;