import { StyleSheet, Text, View } from 'react-native'
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
      <Text>ContactList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})