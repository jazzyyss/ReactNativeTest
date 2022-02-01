import React from 'react';
import { FlatList } from 'react-native';

const ListView = ({data, renderItem, navigation}) => {
    return (
        <FlatList 
            data={data}
            renderItem={({item})=>renderItem(item, navigation)}
            numColumns={3}
        />
    );
}

export default ListView;