import React, { Component } from 'react';
import { View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon, Badge, Text } from 'native-base';

import TrangChu from '../screens/TrangChu';
import TimKiem from '../screens/TimKiem';
import ChiTiet from '../screens/ChiTiet';
import GioHang from '../screens/GioHang';
import ThanhToan from '../screens/ThanhToan';
import Loading from '../screens/Loading';
import DangNhap from '../screens/DangNhap';
import ThongTin from '../screens/ThongTin';
import ThongTinTK from '../screens/ThongTinTK';
import DangKy from '../screens/DangKy';

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

const AuthStack = createSwitchNavigator({
  Loading: Loading,
  ThongTinTK: ThongTinTK,
  DangNhap: DangNhap,
  ThongTin: ThongTin,
  TrangChu: TrangChu,
  ThanhToan: ThanhToan,
},{
  initialRouteName: 'Loading' ,
  }
)

const DangNhapStack = createStackNavigator({
  DangNhap: AuthStack,
  DangKy: DangKy
});

const GioHangStack = createStackNavigator({
  GioHang: GioHang,
  ThanhToan: AuthStack
},{
  initialRouteName: 'GioHang' ,
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
      title: 'Giỏ Hàng',
      tabBarIcon:({ focused }) => {
        return(
          <View style={{}}>
              <Icon name='basket' style={{color: focused ? '#e91e63' : 'slategray'}} type='SimpleLineIcons' />
          </View>

        )
      }
  }
});

export { TrangChuStack, TimKiemStack , GioHangStack, AuthStack };
