import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../config';
import SafeArea from '../../components/SafeArea';
import TransparentBG from '../../components/TransparentBG';
import AuthInput from '../../components/AuthInput';

const Loginscreen = ({navigation}) => {

    
    let [state, setState] = useState({
        email: '',
        pass: ''
    })

    const handleEmailChange = val =>{
        setState({
            ...state,
            email: val
        })
    }

    const handlePassChange = val =>{
        setState({
            ...state,
            pass: val
        })
    }

    const handleLogin = async _ =>{

        await AsyncStorage.setItem('user', 'jaspreet')
        navigation.navigate("MainStack", {screen:"Homescreen"})

    }

    return (
        <SafeArea>
            <Ionicons style={{
                position: 'absolute',
                top: 5,
                left: 5
            }} name="arrow-back-circle-sharp" size={30} color="black" onPress={_=>navigation.goBack()}/>
            <View style={{flex:1, justifyContent: 'center'}}>
                <TransparentBG>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{theme.keywords.appName}</Text>
                </View>
                    <AuthInput value={state.email} onChangeText={handleEmailChange} placeholder='e-mail...'/>
                    <AuthInput value={state.pass} onChangeText={handlePassChange} secureTextEntry={true} placeholder='password...'/>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </Pressable>
                    </View>
                </TransparentBG>
            </View>
        </SafeArea>
    );
};

const styles = StyleSheet.create({
    buttonContainer:{
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: '4%'
    },
    titleContainer:{
        alignItems: 'center',
        paddingVertical: '7%'
    },
    titleText:{
        fontSize: theme.sizes[2],
        fontWeight: theme.fontWeights.bold
    },
    loginButton:{
        backgroundColor: theme.colors.ui.primary,
        elevation: 1,
        borderRadius: 10,
        padding: '2%',
        paddingHorizontal: '5%'
    },
    loginText:{
        color: 'white',
        fontSize: 20,
    }
})

export default Loginscreen;