import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Tests = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.element}>Tests</Text>
    </View>
  )
}

export default Tests

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    element: {
      alignSelf: 'center'
    }
  });