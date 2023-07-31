import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movies from './Movies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

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

  const [number, onChangeNumber] = React.useState('');
  const [myNumber, onChangeMyNumber] = React.useState([]);

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 2</Text>
        <Movies></Movies>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        />
        <Pressable onPress={() => {myNumber.push(number); storeData(myNumber)}}><Text>Set Value</Text></Pressable>
        <Pressable onPress={async () => onChangeMyNumber(await getData())}><Text>Get Value</Text></Pressable>
        <Text style={styles.testNumber}>{myNumber.toString()}</Text>
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

