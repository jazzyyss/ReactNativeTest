import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favscreen from '../screens/Favscreen';
import Settingscreen from '../screens/Settingscreen';
import MainStack from './MainStack';


const Tab = createBottomTabNavigator();

const BottomTab = _ => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'MainStack') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Settingscreen') {
                iconName = focused ? 'settings-sharp' : 'md-settings-outline';
              }else if(route.name === 'Favscreen'){
                  iconName = focused ? 'md-star' : 'md-star-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: false
          })}
        >
            <Tab.Screen 
                name="MainStack" 
                component={MainStack} 
                options={{
                  headerShown: false  
                }}    
            />
            <Tab.Screen 
                name="Favscreen" 
                component={Favscreen} 
                options={{
                  headerShown: false  
                }}    
            />
            <Tab.Screen 
                name="Settingscreen" 
                component={Settingscreen} 
                options={{
                  headerShown: false  
                }}    
            />
        </Tab.Navigator>
    )
}

export default BottomTab;