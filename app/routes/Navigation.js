import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from "./AuthStack";
import { isLoggedIn } from "../services/authenticateUser";
import BottomTab from "./BottomTab";

const Root = createNativeStackNavigator();

const Navigation = _ => {
    
    return(
        <NavigationContainer>
            <Root.Navigator headerMode="none" initialRouteName={!isLoggedIn()?"AuthStack":"BottomTab"}>
                <Root.Screen 
                    name="AuthStack" 
                    component={AuthStack} 
                    options={{
                        headerShown: false
                    }}
                />
                <Root.Screen 
                    name="BottomTab" 
                    component={BottomTab} 
                    options={{
                        headerShown: false
                    }}
                />   
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;