import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ImagePicker from 'react-native-image-crop-picker';
import { post } from './First';
import axios from 'axios';
import { RootState, useAppDispatch } from '../store/store';
import { setDataArray } from '../slices/dataSlice';
import { useSelector } from 'react-redux';

type FormData = {
    image: string;
    title: string;
    body: string;
};

const Form = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // addPost()
    };

    const onImageUpload = () => {
        try {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {
                console.log(image);
            });
        } catch (error) {
            console.log(error)
        }

    };
    const [image, setImage] = useState('');
    const url: string = 'https://dummyjson.com/posts/1';
    const dataArray = useSelector((state: RootState) => state.dataSlice.dataArray);
    const dispatch = useAppDispatch();
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            // setdata(response.data);
            dispatch(setDataArray(response.data));
            console.log(dataArray)
            // console.log("zayd", data)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const addPost = (item: post) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                'id': item.id,
                'title': item.title,
                'body': item.body,

            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('post:', resJson)
                fetchData()
            }).catch(e => { console.log(e) })
    }

    useEffect(() => {
        choosePhotoFromLibrary()
    }, [])
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
            <Controller
                control={control}
                render={({ field }) => (
                    <>
                        <TouchableOpacity style={styles.uploadButton} onPress={choosePhotoFromLibrary}>
                            <Text style={styles.uploadButtonText}>Upload Thumbnail</Text>
                            {field.value && <Image source={{ uri: field.value }} style={styles.uploadedImage} />}
                        </TouchableOpacity>
                        {image === '' ? (
                            <Text>test</Text>
                        ) : (
                            <Image source={{ uri: image }} style={{ height: 200, marginBottom: 10 }} fadeDuration={5000} />
                        )}

                    </>

                )}
                name="image"
            />

            <Controller
                control={control}
                render={({ field }) => (
                    <TextInput
                        {...field}
                        placeholder="Title"
                        style={[styles.input, errors.title && styles.errorInput]}
                    />
                )}
                name="title"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.title && <Text style={styles.errorText}>Title is required.</Text>}

            <Controller
                control={control}
                render={({ field }) => (
                    <TextInput
                        {...field}
                        placeholder="Body"
                        style={[styles.input, errors.body && styles.errorInput]}
                        multiline
                        numberOfLines={10}
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
    );
};

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

export default Form;
