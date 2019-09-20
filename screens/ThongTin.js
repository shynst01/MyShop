import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Icon } from 'native-base';

export default class ThongTin extends Component {
  static navigationOptions = {
    title: 'Thông tin',
    tabBarIcon:({ focused }) => {
      return <Icon name='user' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Thông tin</Text>
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
