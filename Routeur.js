import 'react-native-gesture-handler';
import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './view/HomeScreen';
import Connexion from './view/Connexion';
import Inscription from './view/Inscription';
import PageConnect from './view/PageConnect';


const Router = createStackNavigator(
    {
        HomeScreen,
        Connexion,
        Inscription,
        PageConnect
    },
    {
        initialRouteName: "HomeScreen",
        headerMode: 'None'
    }
);

export default createAppContainer(Router);