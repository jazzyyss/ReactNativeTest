import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landingscreen from '../screens/auth/Landingscreen';
import Loginscreen from '../screens/auth/Loginscreen';
import Registerscreen from '../screens/auth/Registerscreen';

const Stack = createNativeStackNavigator();

const AuthStack = _ => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="LandingPage" 
                component={Landingscreen} 
                options={{
                headerShown: false
                }}
            />
            <Stack.Screen 
                name="LoginPage" 
                component={Loginscreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="RegisterPage" 
                component={Registerscreen}
                options={{
                    headerShown: false
                }}
            /> 
        </Stack.Navigator>
    )
}

export default AuthStack;