import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CardComponent from './CardComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LessonsMenu from './LessonsMenu';
import CustomWords from './CustomWords';

const wordsToLearn1 = {
  words: [
  {eng: 'Humidity',
  ukr: 'Вологість'},
  {eng: 'Humid',
  ukr: 'Вологий, сирий'},
  {eng: 'Stuffy',
  ukr: 'Душний, задушливий'},
  {eng: 'Feature',
  ukr: 'Особливість, риса'},
  {eng: 'To master',
  ukr: 'Опановувати'},
  {eng: 'Let down',
  ukr: 'Підводити, розчаровувати'},
  {eng: 'Tendency',
  ukr: 'Тендеція, схильність'},
  {eng: 'Up-and-coming',
  ukr: 'Багатообіцяючий, перспективний'},
  {eng: 'Neglect',
  ukr: 'Зневажати, нехтувати'},
  {eng: 'Negligence',
  ukr: 'Недбалість, халатність'},
  {eng: 'Lenient',
  ukr: 'М\'який, поблажливий'},
  {eng: 'Show off',
  ukr: 'Випендрюватися'},
  {eng: 'Picky',
  ukr: 'Прискіпливий'},
  {eng: 'Solve',
  ukr: 'Вирішувати (проблему, задачу)'},
  {eng: 'Resentment',
  ukr: 'Обурення, образа'},
  {eng: 'Resentful',
  ukr: 'Ображений, обурений'},
  {eng: 'On the safe side',
  ukr: 'Про всяк випадок'},
  {eng: 'Resent',
  ukr: 'Обурюватися, ображатися'},
  {eng: 'Dean',
  ukr: 'Декан, настоятель собору'},
  {eng: 'Callous',
  ukr: 'Черствий, безсердечний'},
  {eng: 'To bribe',
  ukr: 'Давати хабар'},
  {eng: 'Bribery',
  ukr: 'Хабарництво, продажність'},
  {eng: 'Restrict',
  ukr: 'Обмежувати'},
  {eng: 'Strict',
  ukr: 'Суворий, вимогливий'},
  {eng: 'Hypocrite',
  ukr: 'Лицемір'},
  {eng: 'Spit',
  ukr: 'Плювати'},
  {eng: 'Footage',
  ukr: 'Метраж, кадри'},
  {eng: 'Heritage',
  ukr: 'Спадщина, спадок'},
  {eng: 'Inherit',
  ukr: 'Успадковувати'},
  {eng: 'Goldsmith',
  ukr: 'Ювелір'},
  {eng: 'Insription',
  ukr: 'Напис'},
  {eng: 'Tie',
  ukr: 'Краватка, зав\'язвувати'},
  {eng: 'Untie',
  ukr: 'Розв\'язувати'},
  {eng: 'Flame',
  ukr: 'Полум\'я'},
  {eng: 'Inflammation',
  ukr: 'Запалення'}
],
lesson: 1};

const Stack = createNativeStackNavigator();

const LearningCard  = ({ navigation }) => {

    return (
      <NavigationContainer independent={true}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Lessons Menu">
          <Stack.Screen name="Lessons Menu" component={LessonsMenu}></Stack.Screen>
            <Stack.Screen name="Lesson 1">
              {(words) => <CardComponent words={wordsToLearn1}/>}
            </Stack.Screen>
            <Stack.Screen name="Lesson 2">
              {(words) => <CardComponent words={wordsToLearn1}/>}
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