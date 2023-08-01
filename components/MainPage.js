import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movies from './Movies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback} from 'react';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(jsonValue);
    await AsyncStorage.setItem('my-number', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-number');
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};


const MainPage = () => {

  const fetchData = useCallback(async()=> {
    onChangeMyNumber(await getData());
  }, [])
  
  useEffect(() => {
    fetchData()
  }, [fetchData]);


  const [eng, onChangeEng] = React.useState('');
  const [ukr, onChangeUkr] = React.useState('');
  const [myNumber, onChangeMyNumber] = React.useState([{eng: 'Example', ukr: 'Приклад'}]);

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 2</Text>
        <Movies></Movies>
        <TextInput
        style={styles.input}
        onChangeText={onChangeEng}
        value={eng}
        placeholder="useless placeholder"
        keyboardType='default'
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeUkr}
        value={ukr}
        placeholder="useless placeholder"
        keyboardType='default'
        />
        <Pressable onPress={() => {let obj = {eng: eng, ukr: ukr}; myNumber.push(obj); console.log(myNumber); storeData(myNumber)}}><Text>Set Value</Text></Pressable>
        <Pressable onPress={async () => {myNumber ? onChangeMyNumber(await getData()) : "Nothing to get"; console.log(myNumber)}}><Text>Get Value</Text></Pressable>
        <View>{myNumber.map(item => {
          return(
          <Text style={styles.testNumber}>{item.eng}</Text>
          )
        })}</View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  element: {
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  testNumber: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  }
});