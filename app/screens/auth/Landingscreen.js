import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, Pressable } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { theme } from '../../config/index';
import SafeArea from '../../components/SafeArea';

function Landingscreen({navigation}) {

    return (
        <SafeArea>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{theme.keywords.appName}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={[styles.buttonWraper, styles.loginWrapper]}>
                    <Pressable style={styles.button} onPress={_=>navigation.navigate('LoginPage')}>
                        <MaterialIcons name="login" size={24} color="white" />
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonWraper}>
                    <Pressable style={styles.button} onPress={_=>navigation.navigate('RegisterPage')}>
                        <Ionicons name="ios-mail-outline" size={24} color="white" />
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{flex:1}}></View>
        </SafeArea>
    );
}

const styles = StyleSheet.create({
    titleContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleText:{
        fontSize: theme.sizes[2],
        fontWeight: theme.fontWeights.bold
    },
    buttonsContainer:{
        flex: 1,
        margin: '10%',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        elevation: 2
    },
    buttonWraper:{
        flex: 1,
        alignItems: 'center'
    },
    loginWrapper:{
        justifyContent: 'flex-end', 
        marginBottom: '10%'
    },
    button:{
        backgroundColor: theme.colors.ui.primary,
        elevation: 1,
        paddingVertical: 16,
        paddingHorizontal: 35,
        borderRadius: 10,
        flexDirection: 'row',
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        paddingLeft: 10
    }
})

export default Landingscreen;