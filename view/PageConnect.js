import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";

export default class Connexion extends React.Component{



    render (){

        console.log(this.props);
        console.log(this.props.navigation.state.params);
        const {navigate} = this.props.navigation;
       /* console.log(this.prop + " simple this.proprs");
        var users1 = this.props.navigation.state.params;
        console.log(users1 + "  this.proprs.navigation.state.params");

        var users = this.props.navigation.state.params.users;

        console.log(users + "  this.proprs.navigation.state.params.users");


     //   console.log("je print mon tab dash 3 => " +this.props.navigation.state.params)

        */

        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Vous etes connecté</Text>

                <Text>Bienvenu {this.props.navigation.state.params.username} sur notre application d'inscription connexion.</Text>


                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Deconnexion"
                        type="clear"
                        onPress={() => navigate('HomeScreen')}
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

    }
});


