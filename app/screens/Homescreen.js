import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import SafeArea from '../components/SafeArea';

const Homescreen = ({navigation}) => {

    const handleLogout = async _ =>{
        await AsyncStorage.removeItem('user');
        navigation.navigate("AuthStack")
    }

    return (
        <SafeArea>
        <View>
            <Text>This is Homescreen</Text>
            <Pressable style={{height: 100, width: 100, backgroundColor: 'red'}} onPress={_=>handleLogout()} ><Text>Logout</Text></Pressable>
        </View>
        </SafeArea>
    );
}

export default Homescreen;