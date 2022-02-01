import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Favscreen from '../screens/Favscreen';
import Detailscreen from '../screens/Detailscreen';

const Fav = createNativeStackNavigator();

const FavStack = _ => {
    return(
        <Fav.Navigator>
            <Fav.Screen 
                name="Favscreen" 
                component={Favscreen} 
                options={{
                    headerShown: false
                }}
            />
            <Fav.Screen 
                name="FavDetailscreen" 
                component={Detailscreen} 
                options={{
                    headerShown: false
                }}
            />
        </Fav.Navigator>
    )
}

export default FavStack;