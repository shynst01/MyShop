import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import {Button,Text} from 'native-base';
import RNPaypal from 'react-native-paypal-android';
const ppIcon = require('../imgs/paypal.png');
const client = {
  sandbox: 'ATzJkwKso87N1OCiPWrUSPQILOiVrx-jsBjUJVrSXt1qH2GfYNRE2vx548zqifkgc8MxyNjozTcxKQ9a',
}

export default class PaypalButton extends Component {
  render() {
    return (
      <Button
      rounded
        onPress={async () => {
          try {
              await RNPaypal.config({
                clientId: client.sandbox,
                environment: RNPaypal.constants.env.SANDBOX
              })
            const pay = await RNPaypal.buy({
              value: this.props.total/23000,
              productName: 'Thanh toán',
              currency: 'USD',
              mode: RNPaypal.constants.mode.PAYMENT_INTENT_SALE
            });
            console.log(pay);// SUCESSS
          } catch (e) {
            console.log(e);// NO MONEY :()
          }
        }}
        style={{width: 240,height: 40,backgroundColor:'goldenrod'}}
      >
        <Text style={{marginLeft: 5}}>
          Thanh Toán
        </Text>
        <Image
        style={{width: 80, height: 40,marginLeft: 5}}
        source={ppIcon}
        />
      </Button>
    );
  }
}

const styles = StyleSheet.create({

});
