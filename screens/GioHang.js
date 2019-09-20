import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon, Badge, Text, Card, CardItem, Button, Left, Right, Body , Item,  Header} from 'native-base';
import { connect } from 'react-redux';

class GioHang extends Component {
  renderItem = ({ item }) => {
    const disable = item.soluong === 1 ? true : false;
    return (
      <View>
        <Card>
          <CardItem>
              <Left>
                <Button  style={{borderRadius: 100, height: 40, opacity: 0.7}} onPress={() => {this.props.dispatch({type:'XOA',payload: item})}}>
                  <Text style={{marginLeft: -1}}>
                    <Icon name='close' type='FontAwesome' style={{fontSize: 12,color: 'white'}}/>
                  </Text>
                </Button>
                <Image style={{width: 100, height: 100}} source={{uri: item.hinh}} />
              </Left>
              <Body style={{flexDirection: 'column', paddingVertical: 10}}>
                <Text>
                  {item.ten}
                </Text>
                <Text>
                  Kích cỡ : {item.kichco}
                </Text>
                <Text>
                  Giá : {item.gia}
                </Text>
              </Body>
              <Right style={{flexDirection: 'column'}}>
                <Button  style={{borderRadius: 100, height: 40}} onPress={() => {this.props.dispatch({type:'TANG_SOLUONG',payload: item})}}>
                  <Text style={{marginLeft: -1}}>
                    <Icon name='plus' type='FontAwesome' style={{fontSize: 12,color: 'white'}}/>
                  </Text>
                </Button>
                <Text style={{marginRight: 17}}>
                    {item.soluong}
                </Text>
                <Button disabled={disable} style={{borderRadius: 100, height: 40}} onPress={() => {this.props.dispatch({type:'GIAM_SOLUONG',payload: item})}}>
                  <Text style={{marginLeft: -1}}>
                    <Icon name='minus' type='FontAwesome' style={{fontSize: 12,color: 'white'}}/>
                  </Text>
                </Button>
              </Right>
          </CardItem>
        </Card>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header transparent/>
        <View style={{flex:10}}>
            <FlatList
              data={this.props.cart}
              renderItem={this.renderItem}
              numColumns={1}
              keyExtractor={item => item.id + '_' + item.idkichco}
            />
            <Text>
            </Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue', }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop: 15}}>
              <Text>
                Tổng
              </Text>
              <Text>
                   {this.props.total} VND
              </Text>
            </View>
          </View>
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

function mapStateToProps(state) {
  return {
    cart: state.cart,
    total: state.total
  }
}

export default connect(mapStateToProps)(GioHang);
