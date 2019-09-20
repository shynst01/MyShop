import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon, Text, Badge } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

import { TrangChuStack, TimKiemStack } from './StackNavigator';
import GioHang from '../screens/GioHang';
import ThongTin from '../screens/ThongTin';

class TabNavigator extends Component {
  render() {
    return <AppContainer />
  }
}

const createTabNavigator = createBottomTabNavigator({
  TrangChu: {
    screen: TrangChuStack,
    navigationOptions :{
      tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.dispatch(StackActions.popToTop());
      defaultHandler();
      },
    }
  },
  TimKiem: {
    screen: TimKiemStack,
    navigationOptions :{
      tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.dispatch(StackActions.popToTop());
      defaultHandler();
      },
    }
  },
  GioHang: {
    screen: GioHang,
    navigationOptions :{
      tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.dispatch(StackActions.popToTop());
      defaultHandler();
      },
      title: 'Giỏ Hàng',
      tabBarIcon:({ focused }) => {
        return (
              <Icon name='basket' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
          )
      }
    }
  },
  ThongTin: {
    screen: ThongTin,
    navigationOptions :{
      tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.dispatch(StackActions.popToTop());
      defaultHandler();
      },
    }
  }
},{
  tabBarOptions:  {
    activeTintColor: '#e91e63'
  },
  });

const AppContainer = createAppContainer(createTabNavigator);


export default TabNavigator;
