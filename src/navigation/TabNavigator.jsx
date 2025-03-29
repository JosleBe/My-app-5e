import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ExploreStack from '../modules/airbnb/stacks/ExploreStack'
import SavedStack from '../modules/airbnb/stacks/SavedStack'
import TipsStack from '../modules/airbnb/stacks/TipsStack'
import InboxStack from '../modules/airbnb/stacks/InboxStack'
import PeopleStack from '../modules/airbnb/stacks/PeopleStack'
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#ff5a5f', tabBarInactiveTintColor: '#767676'}}>
            <Tab.Screen name='Explore' component={ExploreStack} options={{tabBarIcon:
               ({color, size}) => <Icon name='search1' type='antdesign'  color={color} size={size}/> }}  />
            <Tab.Screen name='Saved' component={SavedStack}
            options={{tabBarIcon:
              ({color, size}) => <Icon name='heart'type='antdesign'  color={color} size={size}/> }}  />
            <Tab.Screen name='Tips' component={TipsStack}
            options={{tabBarIcon:
              ({color, size}) => <Icon name="airbnb" type="font-awesome-5"  color={color} size={size}/> }}  />
            <Tab.Screen name='Inbox' component={InboxStack}
            options={{tabBarIcon:
              ({color, size}) => <Icon name='inbox' type='feather'  color={color} size={size}/> }}  />
            <Tab.Screen name='People' component={PeopleStack}
            options={{tabBarIcon:
              ({color, size}) => <Icon  color={color} name='people' type='ionicons' size={size}/> }}  />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator
