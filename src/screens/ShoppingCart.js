import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import CartItem from "../components/CartItem"
import EmptyCartItem from "../components/EmptyCartItem"
import { storeData, getData, clearAllData} from '../utils/AsyncStorageUtil'

const ShoppingCart = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    GetCartData()
    return () => {}
  }, [])

  useEffect(() => {
    sum()
  }, [data])

  const GetCartData = async () => {
    let data = await getData()
    if (data) {
      data = JSON.parse(data)
      setData(data)
    }
  }

  const onPressAdd = (item, index) => {
    data.splice(index, 1, { ...item, quantity: item.quantity + 1 })
    setData([...data])
    storeData(data)
  }

  const onPressRemove = (item, index) => {
    if (item.quantity > 1) {
      data.splice(index, 1, { ...item, quantity: item.quantity - 1 })
    }
    else {
      data.splice(index, 1)
    }
    setData([...data])
    storeData(data)
  }

  const sum = () => {
    let arr = data.map((item) => item.price * item.quantity)
    let total = arr.reduce((a, b) => a + b, 0)
    setTotal(total)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          clearAllData()
          setData([])
        }}
      >
        <AntDesign name="delete" size={30} color="green" />
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({item, index})=>{
          return <CartItem item={item} index={index} onPressAdd={onPressAdd} onPressRemove={onPressRemove} />
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyCartItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.text}>${total?.toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  totalContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10 
  }
})
