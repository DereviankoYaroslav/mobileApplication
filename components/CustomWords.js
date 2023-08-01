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
    await AsyncStorage.setItem('my-words', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-words');
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};


const CustomWords = ({navigation}) => {

  const fetchData = useCallback(async()=> {
    const data = await getData();
    data ? onChangeMyNumber(data) : onChangeMyNumber([{eng: 'Example', ukr: 'Приклад'}])
  }, [])
  
  useEffect(() => {
    fetchData()
  }, [fetchData]);


  const [eng, onChangeEng] = React.useState('');
  const [ukr, onChangeUkr] = React.useState('');
  const [myNumber, onChangeMyNumber] = React.useState([{eng: 'Example', ukr: 'Приклад'}]);
  const [elementVisible, setElementVisible] = useState(false);

  const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(myNumber[counter].eng);
    const [check, setCheck] = useState(true);

    const shuffleArray = () => {
        for (let i = myNumber.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = myNumber[i];
          myNumber[i] = myNumber[j];
          myNumber[j] = temp;
        }
        //console.log(props.words.words);
        if (check === true) {
            setContent(myNumber[counter].eng);
        } else {
            setContent(myNumber[counter].ukr);
        }
    };

    const minusHandler = () => {
        let minus;
        if(counter > 0){
            minus = counter-1;
            setCounter(minus);
            if (check === true) {
                setContent(myNumber[minus].eng);
            } else {
                setContent(myNumber[minus].ukr);
            }
        } else {
            minus = myNumber.length-1;
            setCounter(minus);
            if (check === true) {
                setContent(myNumber[minus].eng);
            } else {
                setContent(myNumber[minus].ukr);
            }
        }
    };

    const plusHandler = () => {
        let plus;
        if(counter < myNumber.length-1){
            plus = counter+1;
            setCounter(plus);
            //console.log(plus);
            //console.log(check);
            if (check === true) {
                setContent(myNumber[plus].eng);
            } else {
                setContent(myNumber[plus].ukr);
            }
        } else {
            plus = 0;
            setCounter(plus);
            if (check === true) {
                setContent(myNumber[plus].eng);
            } else {
                setContent(myNumber[plus].ukr);
            }
        }
    };

    const clickHandler = () => {
        setCheck(!check);
        if (check === false) {
            setContent(myNumber[counter].eng);
        } else {
            setContent(myNumber[counter].ukr);
        }
    };

  return (
    <ScrollView style={styles.container}>
        <Pressable onPress={() => setElementVisible(!elementVisible)}><Text>Add Words to Cards</Text></Pressable>
        {elementVisible ? (
        <View>
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
            {/* <Pressable onPress={async () => {myNumber ? onChangeMyNumber(await getData()) : "Nothing to get"; console.log(myNumber)}}><Text>Get Value</Text></Pressable> */}
        </View>) : null}
        <View>
            <View>
                <Pressable style={styles.card} onPress={clickHandler}>
                    <Text style={styles.cardText}>{content}</Text>
                </Pressable>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={minusHandler}>
                        <Text>Prev</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={shuffleArray}>
                        <Text>Shuffle</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={plusHandler}>
                        <Text>Next</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </ScrollView>
  );
};

export default CustomWords;

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
    },
    card: {
        width: 'auto',
        height: 300,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems:'center',
        backgroundColor: '#737375',
        justifyContent: 'center'
    },
    cardText:{
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: '#49965645',
        padding: 5,
        borderRadius: 10
    },
    buttonsText: {
        fontSize: 25,
        fontStyle: 'italic',
    }
});