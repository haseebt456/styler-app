import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ContactList() {
    const conatcts= [
        {
            uid: 1,
            name: 'haseeb',
            status: 'Student',
        },
        {
            uid: 2,
            name: 'Junaid',
            status: 'Project Manager',
        },
        {
            uid: 3,
            name: 'Usama',
            status: 'Bussinesman'
        }
    ]
  return (
    <View>
      <Text style={styles.headingtext}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {conatcts.map(({uid,name,status})=> (
            <View key={uid} style={styles.userCard}></View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext: {},
    container: {},
    userCard:{}
})