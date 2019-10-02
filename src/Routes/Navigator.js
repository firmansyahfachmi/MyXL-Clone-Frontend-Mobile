import React, {Component} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Icon} from 'native-base';

// import Splash from '../Screens/Splash';
import HomeScreen from '../Screens/Home';
import PackageScreen from '../Screens/Package';
import PromoScreen from '../Screens/Promo';
import BuyPackageScreen from '../Screens/BuyPackage';
import CategoryScreen from '../Screens/Category';
import PayScreen from '../Screens/Pay';

// const AuthStack = createStackNavigator({});

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    BuyPackage: {
      screen: BuyPackageScreen,
      navigationOptions: {
        header: null,
      },
    },
    Category: {
      screen: CategoryScreen,
      navigationOptions: {
        header: null,
      },
    },
    Pay: {
      screen: PayScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === 'Pay') {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible,
      };
    },
  },
);

const PackageStack = createStackNavigator({
  Package: {
    screen: PackageScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const PromoStack = createStackNavigator({
  Promo: {
    screen: PromoScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: AppStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Entypo"
            name="home"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    PackageTab: {
      screen: PackageStack,
      navigationOptions: {
        tabBarLabel: 'Paket Saya',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Feather"
            name="package"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    PromoTab: {
      screen: PromoStack,
      navigationOptions: {
        tabBarLabel: 'Promo',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="brightness-percent"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    OthersTab: {
      screen: AppStack,
      navigationOptions: {
        tabBarLabel: 'Lainnya',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Feather"
            name="more-horizontal"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#002CBA',
      inactiveTintColor: 'rgb(102,118,134)',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        paddingVertical: 3,
        height: 55,
        elevation: 2,
        borderTopColor: 'silver',
      },
    },
  },
);

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      //   Splash: Splash,
      App: AppNavigator,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default AppRoot;
