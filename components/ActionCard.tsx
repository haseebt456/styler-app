import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websitelink: string)
    {
        Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text>ActionCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({})