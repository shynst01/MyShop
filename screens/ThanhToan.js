import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import RNPaypal from 'react-native-paypal-android';
import {Button,Item,Input,Label,Text,Header,Left,Right,Icon} from 'native-base';
import { connect } from 'react-redux';

const client = {
  sandbox: 'ATzJkwKso87N1OCiPWrUSPQILOiVrx-jsBjUJVrSXt1qH2GfYNRE2vx548zqifkgc8MxyNjozTcxKQ9a',
}
const ppIcon = require('../imgs/paypal.png');
const HT = [
  {id:1,ten:'Thanh toán trực tuyến Paypal'},{id:2,ten:'Thanh toán tại cửa hàng'}
]

class ThanhToan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: 'abc',
      httt: null,
      ht: HT,
      paypal: false
    }
}
  render() {
    return (
      <ScrollView>
        <Header transparent>
          <Left>
            <Button onPress={() => this.props.navigation.navigate('GioHang')}>
              <Icon name='action-undo' type='SimpleLineIcons' />
            </Button>
          </Left>
          <Right />
        </Header>
        <View style={{margin: 30}}>
          <Text>
            Khách hàng
          </Text>
          <Item disabled >
            <Input disabled />
          </Item>
          <Text>
            Địa chỉ nhận
          </Text>
          <Item>
            <Input value={this.state.address} onChangeText={(address) => this.setState({address})} />
          </Item>
        </View>
        <View style={{margin: 40,borderWidth: 1,borderColor: 'orange',padding: 10, borderRadius: 5}}>
          <View style={{alignItems: 'center',margin: 5}}>
            <Text style={{fontSize: 18}}>
              Chọn hình thức thanh toán
            </Text>
          </View>
          <View style={{flex:1, flexDirection: 'column',justifyContent: 'space-around',margin: 10}}>
            {
              this.state.ht.map(e => {
                return(
                    <TouchableOpacity key={e.id} style={styles.buttonContainer} onPress={() => this.setState({httt: e.id})}>
                      <View style={styles.circle}>
                        {this.state.httt === e.id && <View style={styles.checkedCircle}/>}
                      </View>
                      <Text>{e.ten}</Text>
                    </TouchableOpacity>
                  );
              })
            }
          </View>

        </View>
        <View style={{alignItems: 'center'}}>
        {
          this.state.httt === 1 &&
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
                console.log(pay);
                alert('Giao dịch thành công!');// SUCESSS
              } catch (e) {
                console.log(e);
                alert('Giao dịch thất bại!');// NO MONEY :()
              }
            }}
            style={{width: 240,height: 40,backgroundColor:'goldenrod'}}
          >
            <Text style={{marginLeft: 6}}>
              Thanh toán
            </Text>
            <Image
            style={{width: 80, height: 40,marginLeft: 5}}
            source={ppIcon}
            />
          </Button>}
          {
          this.state.httt === 2 &&
          <Button rounded style={{width: 240,height: 40,backgroundColor:'goldenrod'}}>
            <Text style={{marginLeft: 6}}>
              Thanh toán tại cửa hàng
            </Text>
          </Button>
        }
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    total: state.total
  }
}
export default connect(mapStateToProps)(ThanhToan);
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  circle: {
      height: 25,
      width: 25,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#ACACAC',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
  },
  checkedCircle: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: 'goldenrod',
  },
});
