import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movies from './Movies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback} from 'react';

const MainPage = () => {


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Welcome to the EasyEnglish App</Text>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  card: {
    alignItems:'center',
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  myImage: {
    width: 'auto',
    height: 100
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});