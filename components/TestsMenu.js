import { View, Text, Pressable, StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const TestsMenu = ({navigation}) => {

    return (
        <ScrollView>
            <Pressable style={styles.element} onPress={() => navigation.navigate('Weather')}>
                <Text style={styles.elementText}>Weather</Text>
            </Pressable>
            <Pressable style={styles.element} onPress={() => navigation.navigate('Animals')}>
                <Text style={styles.elementText}>Animals</Text>
            </Pressable>
        </ScrollView>
    )
}

export default TestsMenu

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