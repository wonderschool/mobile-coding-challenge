import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const MenuItem = ({ item, onPress = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>${item.price}</Text>
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <Ionicons name="add-circle" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 0.7,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3,
  },
  icon: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
})
