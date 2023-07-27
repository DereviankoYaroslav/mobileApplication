import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movies from './Movies';

const MainPage = () => {

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 1</Text>
        <Text style={styles.element}>Item 2</Text>
        <Movies></Movies>
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
  }
});

