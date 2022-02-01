import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homescreen from '../screens/Homescreen';
import Detailscreen from '../screens/Detailscreen';

const Main = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Main.Navigator>
            <Main.Screen 
                name="Homescreen" 
                component={Homescreen} 
                options={{
                    headerShown: false
                }}
            />
            <Main.Screen 
                name="Detailscreen" 
                component={Detailscreen} 
                options={{
                    headerShown: false
                }}
            />
        </Main.Navigator>
    );
};

export default MainStack;