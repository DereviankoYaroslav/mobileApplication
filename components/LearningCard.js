import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

const LearningCard  = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.element}>LearningCard</Text>
      </View>
    )
};

export default LearningCard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    element: {
      alignSelf: 'center'
    }
  });