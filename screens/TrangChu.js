import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { Header, Icon, Card, CardItem, Button, Left, Right } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

const DATA = [
  {id: '1',ten: 'Nhẫn 1', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000},
  {id: '2',ten: 'Nhẫn 2', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000},
  {id: '3',ten: 'Nhẫn 1', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000},
  {id: '4',ten: 'Nhẫn 2', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000},
];

class TrangChu extends Component {
  // static navigationOptions = {
  //   title: 'Trang chủ',
  //   tabBarIcon:({ focused }) => {
  //     return <Icon name='home' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
  //   }
  // }

  constructor(props) {
    super(props);

    this.state = {
      dataSrc: [],
      itemSelected: [],
    };
  }

  componentDidMount(){
    this.setState({dataSrc : DATA })
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChiTiet',{ data: item })} >
        <Card>
          <CardItem>
            <Image style={{width: 200, height: 200}} source={{uri: item.hinh}} />
          </CardItem>
          <CardItem>
              <Text style={{fontWeight: 'bold',fontSize: 15}}>
                {item.ten}
              </Text>
          </CardItem>
          <CardItem>
              <Text style={{color: 'red'}}>
                {item.gia}
              </Text>
          </CardItem>
        </Card>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
      <Header transparent />
        <View>
          <View style={[styles.grid]}>
            <ImageBackground source={require('../imgs/nhan.jpg')} style={styles.background}>
              <Text style={styles.textInside}>
                Nhẫn
              </Text>
            </ImageBackground>
          </View>
          <SafeAreaView>
            <Carousel data={this.state.dataSrc}
              renderItem={this.renderItem}
              sliderWidth={400}
              itemWidth={250}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        <View>
          <View style={[styles.grid]}>
            <ImageBackground source={require('../imgs/nhan.jpg')} style={styles.background}>
              <Text style={styles.textInside}>
                Nhẫn
              </Text>
            </ImageBackground>
          </View>
          <SafeAreaView>
            <Carousel data={this.state.dataSrc}
              renderItem={this.renderItem}
              sliderWidth={400}
              itemWidth={250}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  grid:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: 5,
    marginBottom: 5
  },
  textInside:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  background:{
    width: '100%',
    height: '100%',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return {
    cart: state.cart,
    count: state.count
  }
}

export default connect(mapStateToProps)(TrangChu);
