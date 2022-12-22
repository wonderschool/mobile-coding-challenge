import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EmptyCartItem = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>No items in cart</Text>
    </View>
  )
}

export default EmptyCartItem

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10 
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
})