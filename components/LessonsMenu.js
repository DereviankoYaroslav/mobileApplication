import { View, Text, Pressable, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import CardComponent from './CardComponent';
import CustomWords from './CustomWords';

const LessonsMenu = ({navigation}) => {

    return (
        <ScrollView>
            <Pressable style={styles.element} onPress={() => navigation.navigate('Animals')}>
                <Text style={styles.elementText}>Animals</Text>
            </Pressable>
            <Pressable style={styles.element} onPress={() => navigation.navigate('Nature')}>
                <Text style={styles.elementText}>Nature</Text>
            </Pressable>
            <Pressable style={styles.element} onPress={() => navigation.navigate('Custom Words')}>
                <Text style={styles.elementText}>Custom Words</Text>
            </Pressable>
        </ScrollView>
    )
}

export default LessonsMenu

const styles = StyleSheet.create({
    element: {
      alignSelf: 'center',
      marginVertical: 20
    },
    elementText: {
        textAlign: 'center',
        fontSize: 20
    }
  });