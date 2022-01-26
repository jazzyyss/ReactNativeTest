import { SafeAreaView } from "react-native";
import { Platform, StatusBar } from "react-native";

const SafeArea = ({children}) =>(
    <SafeAreaView style={{
        marginTop: Platform.OS==='android'? StatusBar.currentHeight : 0,
        flex: 1
    }}>
        {children}
    </SafeAreaView>
);

export default SafeArea;