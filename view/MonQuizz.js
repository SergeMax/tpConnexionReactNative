import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import * as SQLite from 'expo-sqlite'
import questions from "../data/question";


export default class MonQuizz extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            namee:""
        };
    }


    render (){

        const {navigate} = this.props.navigation;

   //   const state = this.props.navigation.state;


        var namee = this.props.navigation.state;



       function goJeux (state) {

           const propOwn = Object.getOwnPropertyNames(namee);

           if(propOwn.length > 2){
               namee = this.props.navigation.state.params.namee

           }


           console.log(state.name);
           console.log(state.namee);

           navigate("Quiz", {
               title: "Space",
               questions: questions,
               color: "#36b1f0",
               name: state.namee
           })

       }


/*
            var good = false
            var user = null;
            for (var i =0; i<data.length; i++){
                if(data[i]["mail"] == state.email && data[i]["mdp"] == state.password){
                    good = true;
                    user = data[i]
                }
            }
            if (good){
                navigate('PageConnect', {username: user['name']});
            }else{
                alert()
            }

            var isvalid = false;
            var user = null;

        };*/



        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Hello! </Text>

                <View style={{marginTop:30, width:300}} >


                    <Text style={styles.titre}>Votre prénom :</Text>

                    <TextInput
                        style={{ height: 40, borderRadius:5, marginTop:30, width: 300, borderColor: 'gray', borderWidth: 1 }}
                        label="E-mail"
                        returnKeyType="next"
                     //   value={this.state.name}
                        onChangeText={text => this.setState({ namee: text })}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                </View>


                    <View style={{marginTop:30, width:300}} >
                <Button
                    title="Commencer la partie"
                    type="clear"
                    //onPress={() => onSignUppPressed(this.state)}
                    //onPress={() => navigate('Quizz'/*, {users: users}*/)}

                    onPress={() => goJeux(this.state)}


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

