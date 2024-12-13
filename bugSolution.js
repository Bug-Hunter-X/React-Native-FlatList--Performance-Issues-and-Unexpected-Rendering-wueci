import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 100 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const BugFreeFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.value}</Text>
    </View>
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};
export default BugFreeFlatList;