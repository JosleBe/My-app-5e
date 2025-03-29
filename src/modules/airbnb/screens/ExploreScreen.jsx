import React from 'react'
import { SafeAreaView, View } from 'react-native'
import InputSearch from '../components/InputSearch'
import Introduce from '../components/Introduce'

const ExploreScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <InputSearch/>
        <Introduce navigation={navigation}/>
    </SafeAreaView>
  )
}

export default ExploreScreen
