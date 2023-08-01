import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CardComponent from './CardComponent';
import CustomWords from './CustomWords';

const LessonsMenu = ({navigation}) => {

    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Lesson 1')}>
                <Text>Lesson 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson 2')}>
                <Text>Lesson 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Custom Words')}>
                <Text>Custom Words</Text>
            </Pressable>
        </View>
    )
}

export default LessonsMenu