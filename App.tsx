import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
      <FlatCards /> {/*self closing is better way*/}
      <ElevatedCards/>
      </Text>
      </ScrollView>
    </SafeAreaView >
  )
}

export default App