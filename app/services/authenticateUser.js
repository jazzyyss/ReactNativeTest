import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedIn = async _ =>{
    const temp = await AsyncStorage.getAllKeys();
    const index = temp.indexOf('user')
    return index>=0 ? true : false
}

