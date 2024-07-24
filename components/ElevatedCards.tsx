import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal contentContainerStyle={styles.contentcontainer}>
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
      contentcontainer: {
        flexDirection:'row',
        padding:8,
        borderWidth:2,
      },
      card: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width:100,
        borderRadius:3,
        marginHorizontal:4
      },
      cardElevated: {
        backgroundColor: 'violet',
        elevation:4,
        shadowOffset: {
            width:2,
            height:2
        },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowRadius:2
      }
})