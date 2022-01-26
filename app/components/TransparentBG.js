import { View } from "react-native";

const TransparentBG = ({children}) => (
    <View style={{
        margin: '10%',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        elevation: 2,
        padding: '3%'
    }}>
        {children}
    </View>
)

export default TransparentBG;