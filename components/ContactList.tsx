import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const conatcts= [
        {
            uid: 1,
            name: 'Haseeb',
            status: 'Finding ways to focus',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t39.30808-6/321245629_828096041607934_2929299733033071376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG352FQ49hoZfBMkKDZD4sRDAm6HauaHo0MCbodq5oejSI3biYAsRcWpui0KlVWj-vnKS8OO40NaGRkioBzxbDd&_nc_ohc=taCUG7vxz_kQ7kNvgH78Ot6&_nc_zt=23&_nc_ht=scontent.flhe4-1.fna&oh=00_AYBUpON6E8TE-x3-MJKi-XrieEefx9KPf4mDvuvJj0YTYw&oe=66A9E6CA'
        },
        {
            uid: 2,
            name: 'Talha',
            status: 'Becoming a great software engineer',
            imageUrl: 'https://avatars.githubusercontent.com/u/94040679?v=4'
        },
        {
            uid: 3,
            name: 'Usama',
            status: 'Owns ChickenForEveryone',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t1.6435-9/95282033_1497002267130756_6207432807464042496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHkaGaiPf60J6pPvcKDzIB_MXvt8-BS9WMxe-3z4FL1Y_ygOB8PQGgjIqcHK3k7Twanxfu3pbLNGd77SMgOYxow&_nc_ohc=STsUTXg1Dd8Q7kNvgGiepfw&_nc_ht=scontent.flhe4-1.fna&oh=00_AYDdaJL-xJjhorFzb7akn58MDDurVvZu15dLWNy6cUYcEA&oe=66CB8569'
        },
        {
            uid:4,
            name: 'Junaid',
            status: 'Building a construction company',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t39.30808-6/265513069_4584118358345409_5806812561347722161_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELemPuFjyl4Mwe_U4UlD01lBhtRqS_MjWUGG1GpL8yNXUYS16hG0P3gfwGaAJpzssSB4esU-fsISaG23Vp0MUy&_nc_ohc=KZqoJM9KUJMQ7kNvgFJGdPM&_nc_zt=23&_nc_ht=scontent.flhe4-1.fna&oh=00_AYCcGgyMXaqghq1HqdGNe61mk_hTemY059SGFar_QPkiUQ&oe=66A9B82F'

        }
    ]
  return (
    <View>
      <Text style={styles.headingtext}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {conatcts.map(({uid,name,status,imageUrl})=> (
            <View key={uid} style={styles.userCard}>
                <Image
                 source={{
                    uri: imageUrl
                 }}
                 style={styles.userImage}
                ></Image>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}> {status} </Text>
                </View>
                
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container: {
        paddingHorizontal: 16,
        marginTop: 3
    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#75DA8B',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 4
    },
    userImage:{
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 12
    },
    userName: {
        fontSize: 16,
        fontWeight:'bold',
        color: '#000'    
    },
    userStatus: {
        fontSize: 12
    }
})