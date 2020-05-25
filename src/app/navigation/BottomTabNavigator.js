import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../containers/Home';
import Emails from '../containers/Emails';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Emails: Emails,
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
  {
    defaultNavigationOptions: {title: 'Instagram'},
    headerLayoutPreset: 'center',
  },
);

export default BottomTabNavigator;
