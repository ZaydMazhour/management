import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import { post } from '../components/First';
import ImagePicker from 'react-native-image-crop-picker';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import axios from 'axios';
import { setDataArray } from '../slices/dataSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamsHomeStack } from '../../App';
type FormData = {
  image: string;
  title: string;
  body: string;
};

type Props = NativeStackScreenProps<RootParamsHomeStack, 'CreatePost'>;

const Createpost = ({navigation} : Props) => {
  const dataArray = useSelector((state: RootState) => state.dataSlice.dataArray);
  const [data , setData] =useState<post[]>([])
  const { control, handleSubmit, formState: { errors } } = useForm<post>();

  const onSubmit = (data: post) => {
    console.log(data);
    addPost(data)
    navigation.goBack()
  };

  const onImageUpload = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        // console.log(image.path);
        setImage(image.path)
      });
    } catch (error) {
      console.log(error)
    }

  };
  const [image, setImage] = useState<string | any>('');
  const url: string = 'https://dummyjson.com/posts/1';
 

  const dispatch = useAppDispatch();

  useEffect(() => {
    getPosts();
  }, []);


  const getPosts = async () => {

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setDataArray(res))
        console.log(dataArray)
        setData(res);
      })
      .catch(e => console.log(e))


  }

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addPost = ( item : post) => {
    fetch('https://dummyjson.com/posts/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'title': item.title,
        'body': item.body,
        'image': item.image,
        'userId': 6,

      })
    }).then((res) => res.json())
      .then(resJson => {
        console.log('post:', resJson)
        Alert.alert('data has been posted ' , JSON.stringify(resJson))
        getPosts()
        dispatch(setDataArray(resJson))
      }).catch(e => { console.log(e) })
  }


  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path)
    }).catch(e => console.log("error est ", e));
  }

  return (

    <View style={styles.container}>

      <>
        <TouchableOpacity style={styles.uploadButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.uploadButtonText}>Upload Thumbnail</Text>
        </TouchableOpacity>
        {image === '' ? (
          <Text></Text>
        ) : (
          <Image source={{ uri: image }} style={{ height: 200, marginBottom: 10 }} fadeDuration={5000} />
        )}

      </>



      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Title"
            style={[styles.input, errors.title && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.title && <Text style={styles.errorText}>Title is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput

            placeholder="Body"
            style={[styles.input, errors.body && styles.errorInput]}
            multiline
            numberOfLines={10}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="body"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.body && <Text style={styles.errorText}>Body is required.</Text>}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5
      }} >
        <Text style={styles.submitButtonText}>Generate fake data</Text>
      </TouchableOpacity>
    </View>


  )
}

export default Createpost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  uploadButton: {
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf : 'center',
    borderWidth : 0.6,
    paddingVertical : 10,
    paddingHorizontal : 100,
    borderRadius : 3
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});