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
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Shalimar Garden</Text>
            <Text style={styles.cardLabel}>Shalmiar Chowk, Lahore</Text>
            <Text style={styles.cardDescription}>The Shalimar Gardens (Punjabi, Urdu: شالیمار باغ, romanized: Shālīmār Bāgh) are a Mughal garden complex located in Lahore, Punjab, Pakistan. The gardens date from the period when the Mughal Empire was at its artistic and aesthetic zenith,[1] and are now one of Pakistan's most popular tourist destinations.</Text>
            <Text style={styles.cardFooter}>10 mins away</Text>
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
      card:{
        height:360,
        width:342,
        marginHorizontal:8,
        marginVertical:12,
        borderRadius:6

      },
      cardElevated:{
        backgroundColor:'#DAE0E2',
        elevation:3,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: 'black'
      },
      cardImage: {
        height:180,
        marginBottom: 12,
        borderTopLeftRadius:6,
        borderTopRightRadius:6   
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:10
        
      },
      cardTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:6
      },
      cardLabel:{
        fontSize:14,
        marginBottom:6
      },
      cardDescription:{
        color:'#2C3335',
        fontSize:12,
        marginBottom:12,
        flexShrink:1
      },
      cardFooter: {}
})