import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SafeArea from '../components/SafeArea';
import { theme } from '../config/index';
import ListView from '../components/ListView';
import RenderItem from '../components/RenderItem';

const Homescreen = ({navigation}) => {

    const DATA = [
        {key: 1, modal: 2016, title: 'NewHolland'},
        {key: 2, modal: 2016, title: 'NewHolland'},
        {key: 3, modal: 2016, title: 'NewHolland'},
        {key: 4, modal: 2016, title: 'NewHolland'},
        {key: 5, modal: 2016, title: 'NewHolland'},
        {key: 6, modal: 2016, title: 'NewHolland'},
        {key: 7, modal: 2016, title: 'NewHolland'},
        {key: 8, modal: 2016, title: 'NewHolland'},
        {key: 9, modal: 2016, title: 'NewHolland'},
        {key: 10, modal: 2016, title: 'NewHolland'},
        {key: 11, modal: 2016, title: 'NewHolland'},
        {key: 12, modal: 2016, title: 'NewHolland'},
        {key: 13, modal: 2016, title: 'NewHolland'},
        {key: 14, modal: 2016, title: 'NewHolland'}
    ]

    const handleLogout = async _ =>{
        await AsyncStorage.removeItem('user');
        navigation.navigate("AuthStack")
    }

    return (
        <SafeArea>
            <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{theme.keywords.appName}</Text>
                </View>
            <View style={{flex: 1}}>
                <ListView 
                    data={DATA}
                    renderItem={RenderItem}
                />
            </View>
        </SafeArea>
    );
}

const styles = StyleSheet.create({
    titleContainer:{
        marginVertical:'3%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleText:{
        fontSize: theme.sizes[2],
        fontWeight: theme.fontWeights.bold
    }
})

export default Homescreen;