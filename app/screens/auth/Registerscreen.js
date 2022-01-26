import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../config';
import SafeArea from '../../components/SafeArea';
import TransparentBG from '../../components/TransparentBG';
import AuthInput from '../../components/AuthInput';
//import BackBtn from '../../components/backBtn';

const Registerscreen = ({navigation}) => {
    
    let [state, setState] = useState({
        name:'',
        email: '',
        pass: '',
        rePass: '',
        valid: true
    })

    // const isValid = useRef(true);
    // //renderCount.current = renderCount.current + 1;
    // isValid = (state.pass === state.rePass)? true : false;
    // console.log(valid)

    const handleNameChange =  val =>{
        setState({
            ...state,
            name: val
        })
    }

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

    const handleConfirmPass = val => {
        setState({
            ...state,
            rePass: val
        })
        //validatePass();
    }

    // const validatePass = (val) => {
    //     handleConfirmPass(val);
    //     let isValid = (state.pass === state.rePass)? true : false;
        
    //     setState({
    //         ...state,
    //         valid: isValid
    //     })
    // }

    const handleRegister = _ =>{
        
        console.log(state)
    }

    return (
        <SafeArea>
            <Ionicons style={{
                position: 'absolute',
                top: 5,
                left: 5
            }} name="arrow-back-circle-sharp" size={30} color="black" onPress={_=>navigation.goBack()} />
            <View style={{flex:1, justifyContent: 'center'}}>
                <TransparentBG>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{theme.keywords.appName}</Text>
                </View>
                <AuthInput value={state.email} onChangeText={handleNameChange} placeholder='name...'/>
                <AuthInput value={state.email} onChangeText={handleEmailChange} keyboardType='email-address' placeholder='e-mail...'/>
                <AuthInput value={state.pass} onChangeText={handlePassChange} secureTextEntry={true} placeholder='password...'/>
                <AuthInput value={state.rePass} addStyles={!state.valid?{borderBottomColor: 'red'}: {}} onChangeText={handleConfirmPass} secureTextEntry={true} placeholder='confirm password...'/>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.loginButton} onPress={handleRegister}>
                        <Text style={styles.loginText}>Register</Text>
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

export default Registerscreen;