import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MainPage from './components/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LearningCard from './components/LearningCard';
import Tests from './components/Tests';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer >
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused? "home": "home-outline";
            } else if (route.name === 'Cards') {
              iconName = focused ? 'layers' : 'layers-outline';
            } else if (route.name === 'Tests') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelPosition: 'beside-icon',
        })}
      >
        <Tab.Screen options={{title: "Home", headerShown: false}} name='Home' component={MainPage}></Tab.Screen>
        <Tab.Screen name='Cards' component={LearningCard} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name='Tests' component={Tests} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
});
