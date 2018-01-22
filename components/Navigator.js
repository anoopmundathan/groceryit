import React, { Component } from 'react'
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import MapScreen from './MapScreen'
import { gray, red } from '../utils/colors'

import { Settings } from './Settings'
import { Orders } from './Orders'
import { Stores } from './Stores'

export const MainNavigator = TabNavigator({
  Stores: {
    screen: StackNavigator({
      Map: {
        screen: MapScreen,
        navigationOptions: { header: null }
      },
      Detail: {
        screen: Stores
      }
    }, {
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons 
            color={tintColor}
            name='local-grocery-store' 
            size={30} />
        )
      }
    })
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Octicons 
          color={tintColor}
          name='list-unordered' 
          size={30} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons 
          color={tintColor}
          name='ios-settings' 
          size={30} />
      )
    }
  }}, 
  { 
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: red,
      inactiveTintColor: gray,
      style: {
        height: 56,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)