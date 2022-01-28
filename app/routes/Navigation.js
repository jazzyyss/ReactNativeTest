import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { isLoggedIn } from "../services/authenticateUser";

const Root = createNativeStackNavigator();

const Navigation = _ => {
    
    return(
        <NavigationContainer>
            <Root.Navigator headerMode="none" initialRouteName={!isLoggedIn()?"AuthStack":"MainStack"}>
                <Root.Screen 
                    name="AuthStack" 
                    component={AuthStack} 
                    options={{
                        headerShown: false
                    }}
                />
                    <Root.Screen 
                    name="MainStack" 
                    component={MainStack} 
                    options={{
                        headerShown: false
                    }}
                />   
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;