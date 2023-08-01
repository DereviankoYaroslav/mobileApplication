import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CardComponent from './CardComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LessonsMenu from './LessonsMenu';
import CustomWords from './CustomWords';

const wordsToLearn1 = {
  words: [
  {eng: 'Dog',
  ukr: 'Пес'},
  {eng: 'Cat',
  ukr: 'Кіт'},
  {eng: 'Rabbit',
  ukr: 'Кролик'},
  {eng: 'Humster',
  ukr: `Хом'як`},
  {eng: 'Goldfish',
  ukr: 'Золота рибка'},
  {eng: 'Cow',
  ukr: 'Корова'},
  {eng: 'Sheep',
  ukr: 'Вівця'},
  {eng: 'Pig',
  ukr: 'Свиня'},
  {eng: 'Horse',
  ukr: 'Кінь'},
  {eng: 'Chicken',
  ukr: 'Курка'}
],
lesson: 'animals'};

const wordsToLearn2 = {
  words: [
  {eng: 'Leaf',
  ukr: 'Листок'},
  {eng: 'Grass',
  ukr: 'Трава'},
  {eng: 'Tree',
  ukr: 'Дерево'},
  {eng: 'Branch',
  ukr: `Гілка`},
  {eng: 'Flower',
  ukr: 'Квітка'},
  {eng: 'Root',
  ukr: 'Корінь'},
  {eng: 'Forest',
  ukr: 'Ліс'}
],
lesson: 'nature'};


const Stack = createNativeStackNavigator();

const LearningCard  = ({ navigation }) => {

    return (
      <NavigationContainer independent={true}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Lessons Menu">
          <Stack.Screen name="Lessons Menu" component={LessonsMenu}></Stack.Screen>
            <Stack.Screen name="Animals">
              {(words) => <CardComponent words={wordsToLearn1}/>}
            </Stack.Screen>
            <Stack.Screen name="Nature">
              {(words) => <CardComponent words={wordsToLearn2}/>}
            </Stack.Screen>
            <Stack.Screen name="Custom Words" component={CustomWords}></Stack.Screen>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    )
};

export default LearningCard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    element: {
      alignSelf: 'center'
    }
  });