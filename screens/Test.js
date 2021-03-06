import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button
} from 'react-native';

import RNPaypal from 'react-native-paypal-android';
const client = {
  sandbox: 'ATzJkwKso87N1OCiPWrUSPQILOiVrx-jsBjUJVrSXt1qH2GfYNRE2vx548zqifkgc8MxyNjozTcxKQ9a',
}

export default class Test extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Thanh toán paypal"
        onPress={async () => {
          try {
              await RNPaypal.config({
                clientId: client.sandbox,
                environment: RNPaypal.constants.env.SANDBOX
              })
            const pay = await RNPaypal.buy({
              value: 1,
              productName: 'Test1',
              currency: 'USD',
              mode: RNPaypal.constants.mode.PAYMENT_INTENT_SALE
            },{
              value: 1.99,
              productName: 'Testanto 100',
              currency: 'USD',
              mode: RNPaypal.constants.mode.PAYMENT_INTENT_SALE
            });
            console.log(pay);// SUCESSS
          } catch (e) {
            console.log(e);// NO MONEY :()
          }
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
