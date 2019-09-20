import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';

import TrangChu from '../screens/TrangChu';
import TimKiem from '../screens/TimKiem';
import ChiTiet from '../screens/ChiTiet';

const TrangChuStack = createStackNavigator({
    TrangChu: TrangChu,
    ChiTiet: ChiTiet
  },{
    initialRouteName: 'TrangChu' ,
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        title: 'Trang chủ',
        tabBarIcon:({ focused }) => {
          return <Icon name='home' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
        }
    }
  }
);

const TimKiemStack = createStackNavigator({
    TimKiem: TimKiem,
    ChiTiet: ChiTiet
  },{
    initialRouteName: 'TimKiem' ,
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        title: 'Tìm kiếm',
        tabBarIcon:({ focused }) => {
          return <Icon name='magnifier' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
        }
    }
  }
);

export { TrangChuStack, TimKiemStack };
