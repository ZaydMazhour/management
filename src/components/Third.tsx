import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { post } from './First';

const Third = () => {
    const [data, setdata] = useState<post[]>([]);
    const DATA: post[] = [
        { id: 1, title: "His mother had always taught him", body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.", userId: 9, tags: ["history", "american", "crime"], reactions: 2, image: "" }
    ]
    const renderItem = ({ item }: { item: post }) => (
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
            <Image
                style={{ height: 170 }}
                source={{ uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg' }} />
            <Text style={{ fontSize: 16, color: 'black', marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


            </View>
        </View>

    );
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}


            contentContainerStyle={{ flexGrow: 1 }}
        />
    )
}

export default Third

const styles = StyleSheet.create({})