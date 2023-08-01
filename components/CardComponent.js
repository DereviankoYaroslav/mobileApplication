import { View, Text, Pressable, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const CardComponent = (props, { navigation }) => {
    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(props.words.words[counter].eng);
    const [check, setCheck] = useState(true);

    const shuffleArray = () => {
        for (let i = props.words.words.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = props.words.words[i];
          props.words.words[i] = props.words.words[j];
          props.words.words[j] = temp;
        }
        //console.log(props.words.words);
        if (check === true) {
            setContent(props.words.words[counter].eng);
        } else {
            setContent(props.words.words[counter].ukr);
        }
    };

    const minusHandler = () => {
        let minus;
        if(counter > 0){
            minus = counter-1;
            setCounter(minus);
            if (check === true) {
                setContent(props.words.words[minus].eng);
            } else {
                setContent(props.words.words[minus].ukr);
            }
        } else {
            minus = props.words.words.length-1;
            setCounter(minus);
            if (check === true) {
                setContent(props.words.words[minus].eng);
            } else {
                setContent(props.words.words[minus].ukr);
            }
        }
    };

    const plusHandler = () => {
        let plus;
        if(counter < props.words.words.length-1){
            plus = counter+1;
            setCounter(plus);
            //console.log(plus);
            //console.log(check);
            if (check === true) {
                setContent(props.words.words[plus].eng);
            } else {
                setContent(props.words.words[plus].ukr);
            }
        } else {
            plus = 0;
            setCounter(plus);
            if (check === true) {
                setContent(props.words.words[plus].eng);
            } else {
                setContent(props.words.words[plus].ukr);
            }
        }
    };

    const clickHandler = () => {
        setCheck(!check);
        if (check === false) {
            setContent(props.words.words[counter].eng);
        } else {
            setContent(props.words.words[counter].ukr);
        }
    };

    const lessonsBar = (id) => {
        //console.log(id);
        let myEl = document.getElementById(id);
        myEl.classList.toggle('hidden');
        //console.log(myEl);
        let myToggle = document.getElementsByClassName('toggle-icon-' + props.words.lesson);
        for (let i = 0; i < myToggle.length; i++){
            myToggle[i].classList.toggle('hidden');
        }
    };

    return (
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
    );
}

export default CardComponent

const styles = StyleSheet.create({
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


