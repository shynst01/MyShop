import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Picker,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Header, Left, Right, Icon,ListItem, Button ,Toast, Content } from 'native-base';

import { connect } from 'react-redux';

const SIZE = [
  {id:1,kichco:'6'},
  {id:2,kichco:'7'},
  {id:3,kichco:'8'},
];

class ChiTiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: [],
      valueSize: null,
      product: {},
      data: this.props.navigation.state.params.data,
      soluong: 1,
      checkItem: 0,
    };
  }
  componentDidMount(){
    this.setState({size : SIZE,data:{...this.state.data,soluong: this.state.soluong}})
  }
  buy = () =>{
    let check = false;
    if(this.state.valueSize === null)
      Alert.alert(
        'Thông báo',
        'Vui lòng chọn kích cỡ'
      )
    else {
      const item = this.state.data;
      if(this.props.cart.length === 0){
        this.props.dispatch({type:'THEM_MOI',payload: item});
      }
      else{
        this.props.cart.map(e => {
          if(e.id === item.id){
            if(e.idkichco === item.idkichco){
              check = true;
            }
          }
        })
        console.log(check);
        if(check){
            this.props.dispatch({type:'TANG_SOLUONG',payload: item});
        }
        else{
          this.props.dispatch({type:'THEM_MOI',payload: item});
        }


      }
      Alert.alert(
        'Thông báo',
        'Thêm thành công'
      )

    }
  }
  render() {
    const disable = this.state.soluong === 1 ? true : false;
    return (
      <ScrollView>
        <Header transparent>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()}>
              <Icon name='action-undo' type='SimpleLineIcons' />
            </Button>
          </Left>
          <Right />
        </Header>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image style={{width: 250, height: 250}} source={{uri: this.state.data.hinh}} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{ this.state.data.ten }</Text>
            <Text style={{fontSize: 20, color: 'firebrick'}}>{ this.state.data.gia } VND</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row',marginVertical: 10}}>
            <Text style={{fontSize: 18,marginLeft: 50}}>
              Kích cỡ:
            </Text>
            <View style={{flex:1, flexDirection: 'row', marginLeft: 20}}>
            {this.state.size.map(item => {
              return (
                <TouchableOpacity key={item.id} style={styles.buttonContainer} onPress={() => {this.setState({ valueSize: item.id, data:{...this.state.data,idkichco: item.id, kichco: item.kichco} })}}>
                  <Text>{item.kichco}</Text>
                  <View style={styles.circle}>
                    {this.state.valueSize === item.id && <View style={styles.checkedCircle}/>}
                  </View>
                </TouchableOpacity>
                );
              })
            }
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Button disabled={disable} style={{width: 25, height: 25,borderRadius: 50,margin: 10}}  onPress={() => {this.setState({soluong: this.state.soluong - 1, data:{...this.state.data,soluong: this.state.soluong }})}}>
                <Text style={{paddingLeft: 5 }}>
                  <Icon name='minus' type='FontAwesome' style={{fontSize: 20}} />
                </Text>
              </Button>
              <Text style={{marginTop: 11}}>
                  {this.state.soluong}
              </Text>
              <Button  style={{width: 25, height: 25,borderRadius: 50,margin: 10}} onPress={() => {this.setState({soluong: this.state.soluong + 1,data:{...this.state.data,soluong: this.state.soluong+1 }})}}>
                <Text style={{paddingLeft: 4 }}>
                  <Icon name='plus' type='FontAwesome'style={{fontSize: 20}} />
                </Text>
              </Button>
            </View>
          </View>

          <Content style={{flex: 1,marginVertical: 50}}>
            <Button rounded success style={{paddingHorizontal: 10}} onPress={this.buy}>
              <Text>
                Mua sản phẩm
              </Text>
            </Button>
          </Content>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  circle: {
      marginLeft: 5,
      height: 25,
      width: 25,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#ACACAC',
      alignItems: 'center',
      justifyContent: 'center',
  },
  checkedCircle: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: '#e91e63',
  },
});

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(ChiTiet);
