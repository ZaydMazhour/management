import { Button, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamsHomeStack } from '../../App';
import { NativeBaseProvider, Box } from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';

type Props = NativeStackScreenProps<RootParamsHomeStack, 'Posts'>;







const Posts = ({ navigation }: Props) => {
    const layout = useWindowDimensions();


    const renderScene = SceneMap({
        first: First,
        second: Second,
        third: Third,
    });


    const handle = () => {
        setIndex(1);
    }

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Posts' },
        { key: 'second', title: 'Archived' },
        { key: 'third', title: 'Deleted' },
    ]);
    return (
        <View style={{ flex: 1 }}>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}

            />
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({})


