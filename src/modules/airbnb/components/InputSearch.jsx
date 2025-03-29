import React from 'react'
import { View } from 'react-native'
import { Icon, Input } from 'react-native-elements'

const InputSearch = () => {
  return (
   <View>
      <Input placeholder="Search Airbnb" 
      leftIcon = { <Icon name="airbnb" type="font-awesome-5"  color='#ff5a5f' size={22} />} 
      rightIcon = {<Icon name="search1" type="antdesign"  color='#ff5a5f' size={22} /> }
      inputStyle={{userSelect:false}}
      inputContainerStyle={{borderWidth: 2, borderRadius: 11, padding: 5}}
      />
   </View>
  )
}

export default InputSearch
