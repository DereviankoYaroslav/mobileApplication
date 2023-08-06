import { useEffect, useState} from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let bgColor = 'green';

const CardWithPictures = (props) => {

    useEffect(() => {
        variantsShuffle(0)
      }, [variantsShuffle]);

    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(props.words.imgs[counter]);
    const [vars, setVars] = useState([]);
    const [ isPressOne, setIsPressOne ] = useState(true);
    const [ isPressTwo, setIsPressTwo ] = useState(false);
    const [ isPressThree, setIsPressThree ] = useState(false);
    const [ isPressFour, setIsPressFour ] = useState(false);

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
        zeroingAll();
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
        zeroingAll();
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
        zeroingAll();
    };

    const correctChecking = (variant) => {
        if(props.words.answears[counter] == variant){
            console.log('Correct');
            bgColor = 'green';
        } 
        else{
            console.log('Wrong');
            bgColor = 'red';
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
        zeroingAll();
    };

    const zeroingButtonsExOne = () => {
        setIsPressTwo(false);
        setIsPressThree(false);
        setIsPressFour(false);
    }

    const zeroingButtonsExTwo = () => {
        setIsPressOne(false);
        setIsPressThree(false);
        setIsPressFour(false);
    }

    const zeroingButtonsExThree = () => {
        setIsPressOne(false);
        setIsPressTwo(false);
        setIsPressFour(false);
    }

    const zeroingButtonsExFour = () => {
        setIsPressOne(false);
        setIsPressTwo(false);
        setIsPressThree(false);
    }

    const zeroingAll = () => {
        setIsPressOne(false);
        setIsPressTwo(false);
        setIsPressThree(false);
        setIsPressFour(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
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
                        <Pressable style={[styles.variant, {backgroundColor: isPressOne ? `${bgColor}` : '#fff'}]} onPress={() => {correctChecking(vars[0]); setIsPressOne(!isPressOne); zeroingButtonsExOne()}}><Text style={styles.variantText}>{vars[0]}</Text></Pressable>
                        <Pressable style={[styles.variant, {backgroundColor: isPressTwo ? `${bgColor}` : '#fff'}]} onPress={() => {correctChecking(vars[1]); setIsPressTwo(!isPressTwo); zeroingButtonsExTwo()}}><Text style={styles.variantText}>{vars[1]}</Text></Pressable>
                    </View>
                    <View style={styles.variantsRow}>
                        <Pressable style={[styles.variant, {backgroundColor: isPressThree ? `${bgColor}` : '#fff'}]} onPress={() => {correctChecking(vars[2]); setIsPressThree(!isPressThree); zeroingButtonsExThree()}}><Text style={styles.variantText}>{vars[2]}</Text></Pressable>
                        <Pressable style={[styles.variant, {backgroundColor: isPressFour ? `${bgColor}` : '#fff'}]} onPress={() => {correctChecking(vars[3]); setIsPressFour(!isPressFour); zeroingButtonsExFour()}}><Text style={styles.variantText}>{vars[3]}</Text></Pressable>
                    </View>
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
    myImage: {
      width: 'auto',
      height: 300,
      marginHorizontal: 20,
      borderRadius: 20,
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
    },
    variant: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 2.5
    },
    variantText: {
        textAlign: 'center',
        fontSize: 15
    }
  });