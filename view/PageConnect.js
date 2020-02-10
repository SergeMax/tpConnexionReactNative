import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";

export default class Connexion extends React.Component{

    render (){

        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Vous etes connecté</Text>

                <Text>Bienvenu sur notre application d'inscription connexion.</Text>


                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Deconnexion"
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

    }
});


