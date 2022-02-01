import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainStack from './MainStack';
import FavStack from './FavStack';
import SettingStack from './SettingStack';

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
              } else if (route.name === 'SettingStack') {
                iconName = focused ? 'settings-sharp' : 'md-settings-outline';
              }else if(route.name === 'FavStack'){
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
                name="FavStack" 
                component={FavStack} 
                options={{
                  headerShown: false  
                }}    
            />
            <Tab.Screen 
                name="SettingStack" 
                component={SettingStack} 
                options={{
                  headerShown: false  
                }}    
            />
        </Tab.Navigator>
    )
}

export default BottomTab;