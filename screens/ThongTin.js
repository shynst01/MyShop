import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { Icon, Button, Text } from 'native-base';

export default class ThongTin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: null
    };
  }
  _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('DangNhap',{data: 'tt'});
    };
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      this.setState({userToken: userToken});
    };
    componentDidMount(){
      this._bootstrapAsync();
      this.render();
    }
  render() {

    return (
      <View style={styles.container}>
        <Text>Thông tin</Text>
        <Button onPress={this._signOutAsync}>
          <Text>
          Đăng xuất
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
