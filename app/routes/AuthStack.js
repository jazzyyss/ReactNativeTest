import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landingscreen from '../screens/auth/Landingscreen';
import Loginscreen from '../screens/auth/Loginscreen';
import Registerscreen from '../screens/auth/Registerscreen';

const Auth = createNativeStackNavigator();

const AuthStack = _ => {

    return(
        <Auth.Navigator headerMode="none">
            <Auth.Screen 
                name="Landingscreen" 
                component={Landingscreen} 
                options={{
                headerShown: false
                }}
            />
            <Auth.Screen 
                name="Loginscreen" 
                component={Loginscreen}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen 
                name="Registerscreen" 
                component={Registerscreen}
                options={{
                    headerShown: false
                }}
            /> 
        </Auth.Navigator>
    )
}

export default AuthStack;