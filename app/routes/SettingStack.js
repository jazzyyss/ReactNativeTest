import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Settingscreen from '../screens/Settingscreen';
import Camerascreen from '../screens/Camerascreen';

const Setting = createNativeStackNavigator();

const SettingStack = _ => {
    return(
        <Setting.Navigator>
            <Setting.Screen 
                name="Settingscreen" 
                component={Settingscreen} 
                options={{
                    headerShown: false
                }}
            />
            <Setting.Screen 
                name="Camerascreen" 
                component={Camerascreen} 
                options={{
                    headerShown: false
                }}
            />
        </Setting.Navigator>
    )
}

export default SettingStack;