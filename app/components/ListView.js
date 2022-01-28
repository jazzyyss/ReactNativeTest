import React from 'react';
import { FlatList } from 'react-native';

const ListView = ({data, renderItem}) => {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            numColumns={3}
        />
    );
}

export default ListView;