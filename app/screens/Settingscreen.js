import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import SafeArea from "../components/SafeArea";

const Settingscreen = ({navigation}) => {

    const handlePress = _ => {
        navigation.navigate('Camerascreen')
    }

    const handleLogout = async _ =>{
        await AsyncStorage.removeItem('user');
        navigation.navigate("AuthStack")
    }

    return (
        <SafeArea>
            <View style={styles.avatarContainer}>
                <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
                    <FontAwesome style={styles.avatar} name="user-circle" size={24} color="black" />
                </TouchableOpacity>
                <Text>firstnamelastname@gmail.com</Text>
            </View>
            <View style={styles.flyText}>
                <FontAwesome style={styles.icon} name="user-circle" size={24} color="black" />
                <Text style={styles.text}>Jaspreet Singh</Text>
            </View>
            <View style={styles.flyText}>
                <SimpleLineIcons style={styles.icon} name="logout" size={24} color="black" />
                <Text style={styles.text} onPress={handleLogout}>Logout</Text>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    avatarContainer:{
        height:'37%',
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        overflow: 'hidden'
    },
    avatar:{
        fontSize: 150,
        marginBottom: 10
    },
    flyText:{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    icon:{
        fontWeight: 'bold'
    },  
    text:{
        marginLeft: 10,
        fontWeight: "bold"
    }
})

export default Settingscreen;