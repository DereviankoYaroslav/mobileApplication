import { useEffect, useState} from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CardWithPictures = (props) => {

    useEffect(() => {
        variantsShuffle(0)
      }, [variantsShuffle]);

    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(props.words.imgs[counter]);
    const [vars, setVars] = useState([]);

    const shuffleArray = () => {
        for (let i = props.words.imgs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = props.words.imgs[i];
          props.words.imgs[i] = props.words.imgs[j];
          props.words.imgs[j] = temp;
          const temp2 = props.words.answears[i];
          props.words.answears[i] = props.words.answears[j];
          props.words.answears[j] = temp2;
        }
        setContent(props.words.imgs[counter]);
        variantsShuffle(counter);
    };

    const minusHandler = () => {
        if(counter > 0){
            minus = counter-1;
            setCounter(minus);
            setContent(props.words.imgs[minus]);
        } else {
            minus = props.words.imgs.length-1;
            setCounter(minus);
            setContent(props.words.imgs[minus]);
        }
        variantsShuffle(minus);
    };

    const plusHandler = () => {
        if(counter < props.words.imgs.length-1){
            plus = counter+1;
            setCounter(plus);
            console.log(plus);
            setContent(props.words.imgs[plus]);
        } else {
            plus = 0;
            setCounter(plus);
            setContent(props.words.imgs[plus]);
        }
        variantsShuffle(plus);
    };

    const colorChanger = (e) => {
        let id = 'congrats-' + props.words.topic.toLowerCase().split(' ').join('-');
        let congrats = document.getElementById(id);
        let whitening = document.getElementsByClassName('variant');
        for (let i = 0; i < whitening.length; i++){
            whitening[i].style.color = 'aliceblue';
        }
        if(e.target.innerHTML === props.words.answears[counter]){
            e.target.style.color = 'green';
            congrats.innerHTML = `<span class='${props.words.topic.toLowerCase().split(' ').join('-')}'>Correct!</span>`;
            congrats.style.color = 'green';
            congrats.style.fontSize = '40px';
            congrats.style.fontWeight = 'bold';
        } 
        else{
            e.target.style.color = 'red';
            congrats.innerHTML = `<span class='${props.words.topic.toLowerCase().split(' ').join('-')}'>Try Another</span>`;
            congrats.style.color = 'red';
            congrats.style.fontSize = '35px';
        }
    };

    const variantsShuffle = (counter) => {
        let varsInTest = [];
        varsInTest.push(props.words.answears[counter]);
        let mySet;
        do{
            let variant = props.variants[Math.floor(Math.random()*props.variants.length)];
            varsInTest.push(variant);
            mySet = new Set(varsInTest);
            console.log(mySet);
        }
        while(mySet.size < 4);
        console.log(mySet);
        let arr = [...mySet];
        arr.sort((a, b) => 0.5 - Math.random());
        setVars(arr);
    };

    return (
        <View>
                <Image
                    style={styles.myImage}
                    source={{
                    uri: `${content}`,
                    }}
                />
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={minusHandler}>
                        <Text><Ionicons name={'chevron-back-circle-outline'} size={40} color={'black'} /></Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={shuffleArray}>
                        <Text><Ionicons name={'sync-circle-outline'} size={40} color={'black'} /></Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={plusHandler}>
                        <Text><Ionicons name={'chevron-forward-circle-outline'} size={40} color={'black'} /></Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.question}>{props.words.question}</Text>
                </View>
                <View style={styles.variantsRow}>
                    <Pressable><Text onClick={colorChanger}>{vars[0]}</Text></Pressable>
                    <Pressable><Text onClick={colorChanger}>{vars[1]}</Text></Pressable>
                </View>
                <View style={styles.variantsRow}>
                    <Pressable><Text onClick={colorChanger}>{vars[2]}</Text></Pressable>
                    <Pressable><Text onClick={colorChanger}>{vars[3]}</Text></Pressable>
                </View>
        </View>
    );
}

export default CardWithPictures;

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
      height: 200
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        padding: 5,
        borderRadius: 10
    },
    question: {
        textAlign: 'center',
        fontSize: 25
    },
    variantsRow: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  });