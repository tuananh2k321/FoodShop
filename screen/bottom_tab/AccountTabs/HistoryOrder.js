import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ItemOrderHistory from '../../../components/ItemOrderHistory'

const HistoryOrder = () => {
  return (
    <SafeAreaView style={styles.main} >
      <View style={styles.container}>
       <ItemOrderHistory/>
       <ItemOrderHistory/>
       <ItemOrderHistory/>

      </View>
    </SafeAreaView>

  )
}

export default HistoryOrder

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    marginHorizontal: 16,
    marginTop: 14,
    backgroundColor: 'white'
  },
})