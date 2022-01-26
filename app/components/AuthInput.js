import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../config";

const AuthInput = ({value, placeholder, secureTextEntry=false, onChangeText, keyboardType='default', addStyles={}}) => (
    <View style={styles.inputContainer}>
        <TextInput 
            style={[styles.input, addStyles]} 
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            keyboardType={keyboardType}
            
        />
    </View>
)

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 15,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 5
    },
    input:{
        lineHeight: 20,
        backgroundColor: theme.colors.ui.tertiary,
        borderColor: theme.colors.ui.tertiary,
        borderBottomColor: theme.colors.ui.primary,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        paddingLeft: 3
    }
})

export default AuthInput;