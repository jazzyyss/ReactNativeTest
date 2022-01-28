import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const RenderItem = _ =>{
    return(
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.6}>
            <Image source={require("../assets/t1.jpeg")} style={styles.image} />
        </TouchableOpacity>
)};

const styles = StyleSheet.create({
    cardContainer: {
        height: 200,
        backgroundColor: 'black',
        width: '32%',
        margin: '0.67%',
        borderRadius: 5,
        //overflow: 'hidden',
        alignItems: 'center',
        elevation: 7
        
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})

export default RenderItem;