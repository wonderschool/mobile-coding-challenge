import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async ()=> {
  const result = await AsyncStorage.getItem('cart')
  return result
}

export const storeData = async (data)=> {
  AsyncStorage.setItem('cart', JSON.stringify(data))
}

export const clearAllData = async ()=>{
  try{
    const result = await getData()
    if(result){
      AsyncStorage.clear()
    }
  }catch(error){
    console.log(error)
  }
}