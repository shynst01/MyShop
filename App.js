import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Root } from "native-base";
import TabNavigator from './navigation/TabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <TabNavigator />
      </Root>
    </Provider>
  );
};

const defaultState = {
  cart: [],
  total: 0,
  count: 0
}


const cartItems = (state = defaultState, action) => {
    switch (action.type) {
        case 'THEM_MOI':
            return {
              ...state,
              cart: [...state.cart,action.payload],
              total: state.total + (action.payload.gia * action.payload.soluong),
              count: state.count + 1,
            }
            this.props.navigation.setParams({count:state.count});
        case 'TANG_SOLUONG':
            return {
              ...state,
              cart: state.cart.map(e => {
                if(e.id === action.payload.id && e.idkichco === action.payload.idkichco){
                  return {...e,soluong: e.soluong + 1}
                }else{
                  return e
                }
              }),
              total: state.total +  action.payload.gia
            }
        case 'GIAM_SOLUONG':
            return{
              ...state,
              cart: state.cart.map(e => {
                if(e.id === action.payload.id && e.idkichco === action.payload.idkichco){
                  return {...e,soluong: e.soluong - 1}
                }else{
                  return e
                }
              }),
              total: state.total - action.payload.gia
            }
        case 'XOA':
            return {
              ...state,
              cart: state.cart.filter(item => item !== action.payload),
              total: state.total - (action.payload.gia * action.payload.soluong),
            }
        case 'THANH_TOAN':
            return {
              ...state,
              cart: [],
              total: 0
            }
        default :
          return state;
    }
}


const store = createStore( cartItems );

export default App;
