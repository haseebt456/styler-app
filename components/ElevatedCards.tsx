import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >On</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text >More</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      container: {
        padding:8
      },
      card: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width:100
      },
      cardElevated: {
        backgroundColor: 'violet'
      }
})