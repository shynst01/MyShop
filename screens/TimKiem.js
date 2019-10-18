import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Header, Icon, Item, Input, Card, CardItem, Button, Left, Right, Body, Text } from 'native-base';
const CATALOG = [{id: 1,ten: 'Nhẫn'},{id: 2,ten: 'Dây Chuyền'}];
const DATA = [
  {id: '1',ten: 'Nhẫn 1', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000,idLoai: '2' },
  {id: '2',ten: 'Nhẫn 2', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000,idLoai: '2'},
  {id: '3',ten: 'Nhẫn 3', hinh:'https://www.pnj.com.vn/images/detailed/47/gndrwb73265.106-nhan-pnj-vang-trang-10k-dinh-da-ecz.png', gia:1000000,idLoai: '2'},
  {id: '4',ten: 'Nhẫn 4', hinh:'https://www.pnj.com.vn/images/detailed/28/gndrwb75861.106-nhan-pnj-vang-trang-10k-dinh-da-ecz-01.png', gia:1000000,idLoai: '2'},
  {id: '5',ten: 'Dây Chuyền 1',hinh:'https://www.pnj.com.vn/images/thumbnails/435/435/detailed/58/gchrcb97430.100-day-co-pnj-vang-10k-dinh-da-swarovski.png', gia:5000000,idLoai: '1'},
  {id: '6',ten: 'Dây Chuyền 2', hinh:'https://www.pnj.com.vn/images/thumbnails/435/435/detailed/36/gdmrykbc031.002-day-chuyen-pnj-vang-18k-kieu-day-bi-01.png', gia:999999999,idLoai: '1'}
];
const TL = [{id: '1',ten: 'Dây chuyền'},{id: '2', ten: 'Nhẫn'}];
class TimKiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSrc: [],
      search: '',
      loai: [],
      chonLoai: 0
    };
    this.arrayholder = [];
  }

   componentDidMount(){
     this.setState({
        dataSrc: DATA,
        loai: TL,
        arrayholder: DATA,
      });
  }

  searchName(search){
    const newData = this.state.arrayholder.filter(function(item){
      const itemData = item.ten ? item.ten.toUpperCase() : ''.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSrc: newData,
      search: search,
    });
  }
async  filterBtn(idLoai){
    await this.setState({arrayholder: DATA});
    const filter = this.state.arrayholder.filter(x => x.idLoai === idLoai);
    this.setState({dataSrc: filter,arrayholder: filter,chonLoai: idLoai});
    console.log(idLoai);
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
      <Header transparent searchBar rounded>
        <Left />
        <Body>
          <Item style={{width: 200}}>
            <Icon name="magnify" type="MaterialCommunityIcons"/>
            <Input placeholder="Search" onChangeText={(search) => this.searchName(search)}/>
          </Item>
        </Body>
        <Right/>
      </Header>
      <ScrollView horizontal={true} style={{flexDirection: 'row',margin: 5}}>
        <View>
          <TouchableOpacity key='0' style={{marginHorizontal: 7, padding: 6, borderRadius: 50, borderWidth: 1,borderColor: this.state.chonLoai === 0 ? '#e91e63' : 'black'}} onPress={() => {this.setState({dataSrc:DATA , arrayholder: DATA ,chonLoai: 0})}}>
            <View>
              <Text>
                Tất cả
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',}}>
        {
          this.state.loai.map(e => {
            return (
              <TouchableOpacity key={e.id} onPress={() => this.filterBtn(e.id)} style={{marginHorizontal: 7, padding: 6, borderRadius: 50, borderWidth: 1,borderColor: this.state.chonLoai === e.id ? '#e91e63' : 'black'}}>
                <Text>
                  {e.ten}
                </Text>
              </TouchableOpacity>
            )
          })
        }
        </View>
      </ScrollView>
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
  },
});

export default TimKiem;
