import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";


export default class HomeScreen extends React.Component{
    render (){

        console.log("je suis dans render et props nav "+this.props.navigation)
        var users = this.props.navigation.state;
        console.log("je print mon tab home 1 => " +users)
        const propOwn = Object.getOwnPropertyNames(users);
        console.log("je print mon tab home 2 => " +propOwn.length);
        console.log("je print mon tab home 3 => " +this.props.navigation.state);
        if(propOwn.length > 2){
            users = this.props.navigation.state.params.users
            console.log("je print mon tab home 3 => " +users);
        }
        const {navigate} = this.props.navigation;

return(
            <View style={styles.container}>
                <Text style={styles.titre}>Hello connectez-vous ! </Text>

                <View style={{marginTop:30, width:300}} >
                <Button
                    buttonStyle={styles.button}
                    title="Connexion"
                    type="solid"
                    onPress={()=> navigate('Connexion', {users: users})}
                />
                </View>
                <View style={{marginTop:30, width:300}} >
                <Button
                    title="Inscription"
                    type="clear"
                    onPress={()=> navigate('Inscription' , {users: users})}

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

