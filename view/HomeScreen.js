import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component{
    render (){

return(
            <View style={styles.container}>
                <Text style={styles.titre}>Hello connectez-vous ! </Text>

                <View style={{marginTop:30, width:300}} >
                <Button
                    buttonStyle={styles.button}
                    title="Connexion"
                    type="solid"
                />
                </View>
                <View style={{marginTop:30, width:300}} >
                <Button
                    title="Inscription"
                    type="clear"
                />
                </View>
            </View>

)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 400,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titre: {
        marginBottom:6,
        fontSize:30,
        color: 'purple'
    },
    button:{
        backgroundColor: 'purple',

    },


});

