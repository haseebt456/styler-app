import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
           <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
           <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
           <Text>Green</Text>
        </View>
        
      </View>
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
    flex: 1,
    flexDirection: 'row-reverse',
    padding: 8,
  }, 
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin:8,
     width: 100,
    height: 100,

  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#0A79DF'
  },
  cardThree: {
    backgroundColor: '#2ecc72'
  }
})