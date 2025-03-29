import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import ExploreScreen from '../screens/ExploreScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='ExploreScreen' component={ExploreScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default ExploreStack
