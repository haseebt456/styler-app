import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        src={'https://upload.wikimedia.org/wikipedia/commons/c/c9/Reflection_of_Farah_Baksh_Terrace_%28Upper_Terrace%29_main_building.jpg'
        }
        style={styles.cardImage}
        />
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
      card:{},
      cardElevated:{},
      cardImage: {
        height:180   
      }
})