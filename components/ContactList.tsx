import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ContactList() {
    const conatcts= [
        {
            uid: 1,
            name: 'haseeb',
            status: 'Student',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t39.30808-6/321245629_828096041607934_2929299733033071376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG352FQ49hoZfBMkKDZD4sRDAm6HauaHo0MCbodq5oejSI3biYAsRcWpui0KlVWj-vnKS8OO40NaGRkioBzxbDd&_nc_ohc=taCUG7vxz_kQ7kNvgH78Ot6&_nc_zt=23&_nc_ht=scontent.flhe4-1.fna&oh=00_AYBUpON6E8TE-x3-MJKi-XrieEefx9KPf4mDvuvJj0YTYw&oe=66A9E6CA'
        },
        {
            uid: 2,
            name: 'Talha',
            status: 'Gives helping hand to every one',
            imageUrl: 'https://avatars.githubusercontent.com/u/94040679?v=4'
        },
        {
            uid: 3,
            name: 'Usama',
            status: 'Bussinesman',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t1.6435-9/95282033_1497002267130756_6207432807464042496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHkaGaiPf60J6pPvcKDzIB_MXvt8-BS9WMxe-3z4FL1Y_ygOB8PQGgjIqcHK3k7Twanxfu3pbLNGd77SMgOYxow&_nc_ohc=STsUTXg1Dd8Q7kNvgGiepfw&_nc_ht=scontent.flhe4-1.fna&oh=00_AYDdaJL-xJjhorFzb7akn58MDDurVvZu15dLWNy6cUYcEA&oe=66CB8569'
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
            <View key={uid} style={styles.userCard}>

            </View>
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