import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';
import { createStore, combineReducers, } from 'redux';
import { Provider, connect } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon, Text, Badge } from 'native-base';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(combineReducers({ count: counter }));

class Counter extends React.Component {
  static navigationOptions = {
    title: 'Counter!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
        <Button
          title="Increment"
          onPress={() => this.props.dispatch({ type: 'INCREMENT' })}
        />
        <Button
          title="Decrement"
          onPress={() => this.props.dispatch({ type: 'DECREMENT' })}
        />
      </View>
    );
  }
}

class StaticCounter extends React.Component {
  static navigationOptions = {
    title: `Same number, wow!`,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
      </View>
    );
  }
}

// Connect the screens to Redux
let CounterContainer = connect(state => ({ count: state.count }))(Counter);
let StaticCounterContainer = connect(state => ({ count: state.count }))(
  StaticCounter
);

// Create our stack navigator
let RootStack = createBottomTabNavigator({
  Counter: {
    screen: CounterContainer,
    navigationOptions :{
      tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.dispatch(StackActions.popToTop());
      defaultHandler();
      },
      title: 'Giỏ Hàng',
      tabBarIcon:({ focused }) => {
        return (
            <Icon name='basket' style={{color: focused ? '#e91e63' : 'slategray' }} type='SimpleLineIcons' />
          )
      }
    }
  },
  StaticCounter: StaticCounterContainer,
});

// And the app container
let Navigation = createAppContainer(RootStack);

export default class Test extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
