import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SafeArea from '../components/SafeArea';
import { theme } from '../config';

const Detailscreen = ({navigation, route: {params : { item }}}) => {
    
    return (
        <SafeArea>
        <Ionicons style={{
                position: 'absolute',
                top: 5,
                left: 5,
                zIndex: 10
            }} name="arrow-back-circle-sharp" size={30} color="black" onPress={_=>navigation.goBack()}/>
        <Image source={require("../assets/t1.jpeg")} style={styles.imgBg} />
        <View style={styles.descContainer}>
            <Text style={styles.descTitle}>{item.title} &bull; {item.modal}</Text>
            <Text style={styles.descContent}>
            adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem
            </Text>
        </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    imgBg:{
        width:'100%', 
        height:'70%'
    },
    descContainer:{
        height: '35%',
        width: '100%',
        backgroundColor: '#eee',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        elevation: 7
    },
    descTitle:{
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.sizes[2],
        alignSelf: 'center',
        marginVertical: '2%'
    },
    descContent: {
        padding: '1%'
    }
})

export default Detailscreen;