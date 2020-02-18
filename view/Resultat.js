import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";

export default class Resultat extends React.Component{



    render (){

        //console.log(this.props);
      //  console.log(this.props.navigation.state.params);
     //   const {navigate} = this.props.navigation;
       /* console.log(this.prop + " simple this.proprs");
        var users1 = this.props.navigation.state.params;
        console.log(users1 + "  this.proprs.navigation.state.params");

        var users = this.props.navigation.state.params.users;

        console.log(users + "  this.proprs.navigation.state.params.users");


     //   console.log("je print mon tab dash 3 => " +this.props.navigation.state.params)

        */


console.log(this.props.navigation.state.params.score);

        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Resultat</Text>

                <Text style={styles.titre}>Pour le joueur : {this.props.navigation.state.params.name}</Text>
               <Text>Votre score est de  {this.props.navigation.state.params.score} sur 3 </Text>


               {/* <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Deconnexion"
                        type="clear"
                        onPress={() => navigate('HomeScreen')}
                    />
                </View>*/}
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


