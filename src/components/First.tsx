import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { setDataArray } from '../slices/dataSlice';
import SvgComponent from '../Icons/delete';
import SvgComponent2 from '../Icons/validate';

type ServiceUProps = {
  navigation: NavigationProp<ParamListBase>;

};

export type post = {
  id: number,
  title: string,
  body: string,
  image: string,
  tags: string[],
  userId: number,
  reactions: number
}

export type DATA = {
  id: number,
  title: string,
  body: string,
  image: string
}



const First = () => {

  
  const url: string = 'https://jsonplaceholder.typicode.com/todos';
  const dispatch = useAppDispatch();

  const dataArray = useSelector((state: RootState) => state.dataSlice.dataArray);
  const DATA: post[] = [
    { id: 1, title: "His mother had always taught him", body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.", userId: 9, tags: ["history", "american", "crime"], reactions: 2, image: "" }
  ]
  const [data, setdata] = useState<post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);


  const getPosts = async () => {

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log('les donnes sont : ========>>', res)
        // setdata(res);
        dispatch(setDataArray(res))
        console.log(dataArray)
        setdata(res)
        console.log("zayd", data)
      })
      .catch(e => console.log(e))


  }
  const deletePost = (postId: string) => {
    fetch("https://dummyjson.com/posts/1" + `/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    }).then((res) => res.json())
      .then(resJson => {
        console.log('delete:', resJson)
        Alert.alert('delete:', JSON.stringify(resJson))
        getPosts()
      }).catch(e => { console.log(e) })
  }





  const renderItem = ({ item }: { item: post }) => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <Image
        style={{ height: 170 }}
        source={{ uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg' }} />
      <Text style={{ fontSize: 16, color: 'black', marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity 
        onPress={()=>deletePost(item.id.toString()) }
        style={{ flexDirection: 'row', alignSelf: "center", display: 'flex', marginTop: 15 }}>
          <SvgComponent height={'50'} width={'50'} />
          <Text style={{ textAlignVertical: 'center' }}>Deleted</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          style={{ flexDirection: 'row', alignSelf: "center", display: 'flex', marginTop: 15 }}>
          <SvgComponent2 height={'50'} width={'50'} />
          <Text style={{ textAlignVertical: 'center' }}>Archived</Text>
        </TouchableOpacity>
      </View>
    </View>

  );



  const navigation = useNavigation()
  return (

    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Text style={{ color: 'black', alignSelf: 'center' }}>Posts</Text>
        <TouchableOpacity style={{ height: 50, backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('CreatePost')}>
          <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>Create New</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}


        contentContainerStyle={{ flexGrow: 1 }}
      />


    </SafeAreaView>
  );
}

export default First

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})


