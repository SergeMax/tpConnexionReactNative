import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './view/HomeScreen';
import Connexion from './view/Connexion';
import Inscription from './view/Inscription';
import PageConnect from './view/PageConnect';
import ForgotPasswordScreen from './view/ForgotPasswordScreen';

const Router = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        Connexion: Connexion,
        Inscription: Inscription,
        PageConnect: PageConnect,
        ForgotPasswordScreen: ForgotPasswordScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'None'
    }
);

export default createAppContainer(Router);
