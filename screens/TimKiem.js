import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Header, Icon, Item, Input, Card, CardItem, Button, Left, Right, Body } from 'native-base';

const DATA = [
  {id: '1',ten: 'Nhẫn 1', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000},
  {id: '2',ten: 'Nhẫn 2', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000},
  {id: '3',ten: 'Nhẫn 3', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000},
  {id: '4',ten: 'Nhẫn 4', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000},
  {id: '5',ten: 'Dây Chuyền 1',hinh:'https://www.pnj.com.vn/images/thumbnails/435/435/detailed/58/gchrcb97430.100-day-co-pnj-vang-10k-dinh-da-swarovski.png', gia:5000000},
  {id: '6',ten: 'Dây Chuyền 2', hinh:'https://www.pnj.com.vn/images/thumbnails/435/435/detailed/36/gdmrykbc031.002-day-chuyen-pnj-vang-18k-kieu-day-bi-01.png', gia:999999999}
];
class TimKiem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSrc: []
    };
  }

  componentDidMount(){
    this.setState({dataSrc : DATA })
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChiTiet',{ data: item })}>
        <Card>
          <CardItem>
            <Image style={{width: 140, height: 140}} source={{uri: item.hinh}} />
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
        <Header transparent searchBar >
          <Left/>
          <Body>
            <Item rounded style={{width: 230}}>
              <Icon name='magnifier' type='SimpleLineIcons'/>
              <Input  placeholder="Search"/>
            </Item>
          </Body>
          <Right>
            <Button>
                <Icon name='equalizer' type='SimpleLineIcons'/>
            </Button>
          </Right>
        </Header>
        <View>
          <FlatList
            data={this.state.dataSrc}
            renderItem={this.renderItem}
            numColumns={2}
            style={{marginLeft: 12, marginRight: 12}}
            keyExtractor={item => item.id}
          />
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
  }
});

export default TimKiem;
