import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MonQuizz from './view/MonQuizz';

import Resultat from './view/Resultat';
import Quiz from './view/Quiz';


const Router = createStackNavigator(
    {
        MonQuizz: MonQuizz,
      //  Quizz: Quizz,
        Quiz: Quiz,
        Resultat: Resultat
    },
    {
        initialRouteName: 'MonQuizz'
    }
);

export default createAppContainer(Router);
