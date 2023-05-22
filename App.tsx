import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Posts from './src/screnns/Posts';
import Createpost from './src/screnns/Createpost';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
const Stack = createNativeStackNavigator();

export type RootParamsHomeStack = {
  Posts: undefined;
  CreatePost: undefined;

}




const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={Posts} options={{ headerTitleAlign: 'center', title: 'Posts app' }} />
          <Stack.Screen name="CreatePost" component={Createpost} options={{title:'Creat-Post', headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>



  )
}

export default App

const styles = StyleSheet.create({})