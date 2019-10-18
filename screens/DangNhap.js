import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import {Header} from 'native-base';

export default class DangNhap extends Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    const { params } = this.props.navigation.state;
    const data = params ? params.data : null;
    if(data != null){
      if(data == 'tt'){
        this.props.navigation.navigate('ThongTin');
      }
      if(data == 'gh'){
        this.props.navigation.navigate('ThanhToan');
      }
    }
  };
  render() {
    return (
      <View>
        <Header transparent/>
        <Button title="Đăng nhập!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
